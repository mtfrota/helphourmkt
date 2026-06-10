"use client"

import { motion } from "framer-motion"

import { useBrandAnalyzerStore } from "@/app/store/brandAnalyzerStore"

export default function ResultScreen() {
  const {
    result,
    answers,
    reset,
    setOpen,
  } = useBrandAnalyzerStore()

  if (!result) return null

  const handleWhatsappRedirect = () => {
    const whatsappNumber =
      "5585988382733"

    const message = encodeURIComponent(
      result.whatsappMessage
    )

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    )
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="relative"
    >
      {/* HEADER */}
      <div className="mb-14">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="
            mb-6
            inline-flex
            items-center
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-2
            text-sm
            text-violet-300
          "
        >
          ANÁLISE FINALIZADA
        </motion.div>

        <h2
          className="
            mb-4
            text-5xl
            font-semibold
            leading-tight
            text-white
          "
        >
          {answers.brandName}
        </h2>

        <p
          className="
            max-w-2xl
            text-lg
            leading-relaxed
            text-white/50
          "
        >
          Nossa inteligência estratégica
          analisou sua presença digital e
          identificou oportunidades importantes
          para crescimento e posicionamento.
        </p>
      </div>

      {/* SCORES */}
      <div className="mb-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <ScoreCard
          title="Visibilidade"
          description="As pessoas encontram sua marca?"
          value={result.scores.visibility}
        />

        <ScoreCard
          title="Aparência"
          description="Sua marca parece profissional?"
          value={result.scores.branding}
          
        />

        <ScoreCard
          title="Clareza"
          description="Seu perfil comunica o que faz?"
          value={result.scores.positioning}
        />

        <ScoreCard
          title="Crescimento"
          description="Sua marca tem potencial de crescer?"
          value={result.scores.growth}
        />

        <ScoreCard
          title="Frequência"
          description="Existe constância no digital?"
          value={result.scores.consistency}
        />
      </div>

      {/* ANALYSIS */}
      <div
        className="
          mb-10
          rounded-3xl
          border
          border-white/10
          bg-white/3
          p-8
        "
      >
        <h3
          className="
            mb-5
            text-xl
            font-semibold
            text-white
          "
        >
          Diagnóstico Estratégico
        </h3>

        <p
          className="
            text-lg
            leading-relaxed
            text-white/60
          "
        >
          {result.analysis}
        </p>
      </div>

      {/* RECOMMENDATIONS */}
      <div
        className="
          mb-14
          rounded-3xl
          border
          border-white/10
          bg-linear-to-br
          from-violet-500/10
          to-fuchsia-500/5
          p-8
        "
      >
        <h3
          className="
            mb-6
            text-xl
            font-semibold
            text-white
          "
        >
          Foco recomendado para sua marca
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {result.recommendations.map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/3
                  px-5
                  py-4
                  text-white/80
                "
              >
                {item}
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* CTA */}
      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
        "
      >
        <button
          onClick={handleWhatsappRedirect}
          className="
            flex-1
            rounded-2xl
            bg-linear-to-r
            from-violet-500
            to-fuchsia-500
            px-8
            py-5
            text-lg
            font-medium
            text-white
            transition
            hover:scale-[1.01]
          "
        >
          Receber análise no WhatsApp
        </button>

        <button
          onClick={() => {
            reset()
            setOpen(false)
          }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/3
            px-8
            py-5
            text-white/60
            transition
            hover:bg-white/5
            hover:text-white
          "
        >
          Fechar
        </button>
      </div>
    </motion.div>
  )
}

interface ScoreCardProps {
  title: string
  description: string
  value: number
}

function ScoreCard({
  title,
  description,
  value,
}: ScoreCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/3
        p-6
      "
    >
    <div classname="mb-4">
      <div className="mb-4 text-sm text-white/40">
        {title}
      </div>
      <div classname="mt-1 text-xs text-white/30">
        {description}
      </div>
    </div>

      <div
        className="
          flex
          items-end
          gap-1
        "
      >
        <span
          className="
            text-5xl
            font-semibold
            text-white
          "
        >
          {value}
        </span>

        <span className="mb-1 text-white/30">
          /10
        </span>
      </div>
    </motion.div>
  )
}