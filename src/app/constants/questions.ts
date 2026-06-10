import { Question } from "../lib/brand-analyzer/types"

export const questions: Question[] = [
  {
    id: "businessType",
    question: "Qual o tipo do seu negócio?",
    description:
      "Escolha a opção que mais representa sua marca.",
    type: "select",
    options: [
      {
        label: "Loja",
        value: "store",
      },
      {
        label: "Restaurante",
        value: "restaurant",
      },
      {
        label: "Evento",
        value: "event",
      },
      {
        label: "Empresa Local",
        value: "local-business",
      },
      {
        label: "Prestador de Serviço",
        value: "service",
      },
      {
        label: "Influenciador",
        value: "influencer",
      },
      {
        label: "Marca Pessoal",
        value: "personal-brand",
      },
      {
        label: "Outro",
        value: "other",
      },
    ],
  },

  {
    id: "brandName",
    question: "Qual o nome da sua marca ou empresa?",
    description:
      "Digite o nome que representa seu negócio.",
    type: "input",
    placeholder: "Ex: Help Hour",
  },

  {
    id: "instagram",
    question: "Qual seu Instagram ou site?",
    description:
      "Isso ajuda nossa IA a entender melhor sua presença digital.",
    type: "input",
    placeholder: "@suaempresa",
  },

  {
    id: "objective",
    question: "O que você deseja melhorar hoje?",
    description:
      "Escolha o principal objetivo da sua marca.",
    type: "select",
    options: [
      {
        label: "Mais vendas",
        value: "sales",
      },
      {
        label: "Mais visibilidade",
        value: "visibility",
      },
      {
        label: "Melhor posicionamento",
        value: "positioning",
      },
      {
        label: "Conteúdo profissional",
        value: "content",
      },
      {
        label: "Divulgação de evento",
        value: "event-promotion",
      },
      {
        label: "Fortalecer minha marca",
        value: "branding",
      },
      {
        label: "Crescer nas redes sociais",
        value: "social-growth",
      },
      {
        label: "Atrair clientes locais",
        value: "local-clients",
      },
    ],
  },

  {
    id: "problem",
    question: "Qual o maior problema da sua presença digital hoje?",
    description:
      "Escolha o que mais está dificultando seu crescimento.",
    type: "select",
    options: [
      {
        label: "Pouco alcance",
        value: "low-reach",
      },
      {
        label: "Poucas vendas",
        value: "low-sales",
      },
      {
        label: "Perfil sem identidade",
        value: "no-identity",
      },
      {
        label: "Conteúdo fraco",
        value: "weak-content",
      },
      {
        label: "Falta de consistência",
        value: "lack-consistency",
      },
      {
        label: "Não consigo me destacar",
        value: "no-differentiation",
      },
      {
        label: "Minha marca não transmite valor",
        value: "low-value",
      },
      {
        label: "Baixo engajamento",
        value: "low-engagement",
      },
    ],
  },

  {
    id: "marketingLevel",
    question: "Você já investe em marketing atualmente?",
    description:
      "Isso ajuda a IA entender o estágio da sua marca.",
    type: "select",
    options: [
      {
        label: "Nunca investi",
        value: "never",
      },
      {
        label: "Invisto pouco",
        value: "low",
      },
      {
        label: "Já investi mas não funcionou",
        value: "bad-experience",
      },
      {
        label: "Sim, mas quero melhorar",
        value: "improve",
      },
    ],
  },
]
