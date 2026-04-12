export type ServiceIconName =
  | "MessageSquare"
  | "Video"
  | "Camera"
  | "CalendarDays"
  | "Globe2"
  | "BarChart3";

export const WHATSAPP_URL = "https://wa.me/5585990000000";

export const heroContent = {
  badge: "Agência digital",
  titleStart: "Você vive,",
  titleHighlight: "a gente posta",
  description: "Sua agência digital completa para estratégias de marketing que impulsionam seu negócio.",
  primaryCtaLabel: "Nossos serviços",
  primaryCtaHref: "/helphour#servicos",
  secondaryCtaLabel: "Fale conosco",
};

export const aboutContent = {
  badge: "Sobre nós",
  title: "A HelpHour é a parceira que faz o digital virar resultado",
  paragraphs: [
    "Fundada em 2021, a HelpHour nasceu para gerar resultado real para empresas locais através de estratégias digitais que conectam marca e público certo.",
    "Nosso time integra criação, performance e tecnologia para entregar campanhas, conteúdo e páginas que convertem em clientes.",
  ],
};

export const aboutHighlights = [
  { title: "Criatividade", text: "Soluções inovadoras" },
  { title: "Equipe", text: "Especialistas dedicados" },
  { title: "Resultados", text: "Estratégias orientadas a dados" },
  { title: "Inovação", text: "Sempre em evolução" },
];

export const services: Array<{
  title: string;
  text: string;
  items: string[];
  icon: ServiceIconName;
}> = [
  {
    title: "Gerenciamento de redes sociais",
    text: "Planejamento de conteúdo, design de posts e copy orientada para gerar relacionamento e vendas.",
    items: ["Planejamento mensal", "Design de posts", "Copywriting", "Análise de métricas"],
    icon: "MessageSquare",
  },
  {
    title: "Produção audiovisual",
    text: "Vídeos profissionais para stories, reels e campanhas institucionais com alto padrão visual.",
    items: ["Videomaker", "Storymaker", "Edição profissional", "Motion graphics"],
    icon: "Video",
  },
  {
    title: "Fotografia profissional",
    text: "Fotos para produtos, equipe, espaço e campanhas com foco em credibilidade da marca.",
    items: ["Produtos", "Corporativo", "Cobertura de eventos", "Edição de imagens"],
    icon: "Camera",
  },
  {
    title: "Cobertura de eventos",
    text: "Registro completo de eventos, lançamentos e ativações de marca para uso comercial.",
    items: ["Eventos corporativos", "Lançamentos", "Transmissão ao vivo", "Conteúdo em tempo real", "Aniversários e celebrações", "Casamentos e eventos sociais"],
    icon: "CalendarDays",
  },
  {
    title: "Desenvolvimento web",
    text: "Sites modernos, rápidos e responsivos para converter visitantes em contatos qualificados.",
    items: ["Site institucional", "Landing pages", "SEO técnico", "Performance", "Lojas online"],
    icon: "Globe2",
  },
  {
    title: "Marketing digital",
    text: "Gestão de campanhas de tráfego pago para gerar demanda local e aumentar o faturamento.",
    items: ["Meta Ads", "Google Ads", "Funil de captação", "Relatórios de resultado"],
    icon: "BarChart3",
  },
];

export const processContent = {
  badge: "Método",
  title: "Como Trabalhamos",
  description: "Nossa estratégia é focada em resultado, processo claro e atendimento próximo.",
};

export const processSteps = [
  { title: "Análise", text: "Entendemos seu negócio, público e metas para montar uma estratégia sob medida." },
  { title: "Estratégia", text: "Definimos canais, plano de ação e cronograma de execução com metas claras." },
  { title: "Execução", text: "Produzimos conteúdo, anúncios e páginas com foco total em conversão." },
  { title: "Resultados", text: "Monitoramos dados, otimizamos campanhas e escalamos o que traz retorno." },
];

export const portfolioContent = {
  badge: "Cases reais",
  title: "Nosso Portfólio",
  description: "Confira alguns projetos de marketing e os resultados gerados para clientes locais.",
};

export const portfolioItems = [
  {
    title: "Tráfego pago",
    result: "+120% leads qualificados",
    metricLabel: "Crescimento comprovado, mais vendas e menos custo.",
    image: "/portfolio/trafego.jpeg",
  },
  {
    title: "Cobertura de eventos",
    result: "+275k alcance",
    metricLabel: "Registro completo e posicionamento forte da marca.",
    image: "/portfolio/cam01.jpeg",
  },
  {
    title: "Site institucional",
    result: "+300% conversão",
    metricLabel: "Mais autoridade, mais clareza e mais contatos.",
    image: "/portfolio/sites.jpeg",
  },
  {
    title: "Estratégia social media",
    result: "+90% engajamento",
    metricLabel: "Conteúdo diário estruturado e consistência editorial.",
    image: "/portfolio/social.png",
  },
];

export const contactContent = {
  badge: "Contato",
  title: "Entre em Contato",
  description: "Estamos prontos para atender sua empresa com soluções personalizadas para o seu negócio.",
  addressTitle: "Endereço",
  addressLines: ["Av. do Batel, 1868 - Batel, 4º andar", "Curitiba - PR, 80420-090"],
  whatsappLabel: "WhatsApp",
  whatsappNumber: "(85) 99000-0000",
  emailLabel: "E-mail",
  email: "contato@helphourmkt.com.br",
};

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: WHATSAPP_URL },
];
