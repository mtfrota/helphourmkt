import { NextResponse } from "next/server"

import { openai } from "@/app/services/openai"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      businessType,
      brandName,
      instagram,
      objective,
      problem,
      marketingLevel,
    } = body

    const prompt = `
Você é um consultor estratégico premium da agência Help Hour.

Analise a marca do cliente baseado nas informações abaixo.

NEGÓCIO:
${businessType}

MARCA:
${brandName}

INSTAGRAM/SITE:
${instagram}

OBJETIVO:
${objective}

PROBLEMA:
${problem}

NÍVEL DE MARKETING:
${marketingLevel}

Sua resposta deve:
- soar premium
- moderna
- inteligente
- estratégica
- humana
- objetiva

Não escreva textos gigantes.
Não use linguagem robótica.
Não use emojis.

Retorne SOMENTE JSON válido.

Formato:

{
  "analysis": "texto aqui",
  "scores": {
    "visibility": 0,
    "branding": 0,
    "positioning": 0,
    "growth": 0,
    "consistency": 0
  },
  "recommendations": [
    "item 1",
    "item 2",
    "item 3"
  ]
}
`

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "Você é um especialista em branding e posicionamento digital.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.8,
      })

    const content =
      completion.choices[0].message.content

    if (!content) {
      throw new Error(
        "Resposta vazia da OpenAI"
      )
    }

    const parsed = JSON.parse(content)

    const whatsappMessage = `
*Nova análise estratégica — Help Hour*

*Marca:* ${brandName}
*Tipo:* ${businessType}

*Objetivo:* ${objective}
*Problema:* ${problem}

*Diagnóstico:*
${parsed.analysis}

*Notas:*
- Presença: ${parsed.scores.visibility}/10
- Branding: ${parsed.scores.branding}/10
- Posicionamento: ${parsed.scores.positioning}/10
- Potencial: ${parsed.scores.growth}/10
- Consistência: ${parsed.scores.consistency}/10

*Foco recomendado:*
${parsed.recommendations
  .map((item: string) => `• ${item}`)
  .join("\n")}
`

    return NextResponse.json({
      ...parsed,
      whatsappMessage,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error:
          "Erro ao gerar análise estratégica.",
      },
      {
        status: 500,
      }
    )
  }
}