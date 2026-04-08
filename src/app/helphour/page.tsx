 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "../components/ui/Reveal";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import bgAnimation from "src/animations/fundo.json";
import arrowDown from "@/animations/down_arrow.json";

const WHATSAPP_URL = "https://wa.me/5585990000000";

const services = [
  {
    title: "Gerenciamento de redes sociais",
    text: "Planejamento de conteúdo, design de posts e copy orientada para gerar relacionamento e vendas.",
    items: ["Planejamento mensal", "Design de posts", "Copywriting", "Análise de métricas"],
  },
  {
    title: "Produçào audiovisual",
    text: "Vídeos profissionais para stories, reels e campanhas institucionais com alto padrào visual.",
    items: ["Videomaker", "Storymaker", "Ediçào profissional", "Motion graphics"],
  },
  {
    title: "Fotografia profissional",
    text: "Fotos para produtos, equipe, espaço e campanhas com foco em credibilidade da marca.",
    items: ["Produtos", "Corporativo", "Cobertura de eventos", "Ediçào de imagens"],
  },
  {
    title: "Cobertura de eventos",
    text: "Registro completo de eventos, lançamentos e ativaçàµes de marca para uso comercial.",
    items: ["Eventos corporativos", "Lançamentos", "Transmissào ao vivo", "Conteúdo em tempo real"],
  },
  {
    title: "Desenvolvimento web",
    text: "Sites modernos, rápidos e responsivos para converter visitantes em contatos qualificados.",
    items: ["Site institucional", "Landing pages", "SEO técnico", "Performance"],
  },
  {
    title: "Marketing digital",
    text: "Gestào de campanhas de tráfego pago para gerar demanda local e aumentar o faturamento.",
    items: ["Meta Ads", "Google Ads", "Funil de captaçào", "Relatórios de resultado"],
  },
];

const processSteps = [
  { title: "Análise", text: "Entendemos seu negócio, público e metas para montar uma estratégia sob medida." },
  { title: "Estratégia", text: "Definimos canais, plano de açào e cronograma de execuçào com metas claras." },
  { title: "Execuçào", text: "Produzimos conteúdo, anúncios e páginas com foco total em conversào." },
  { title: "Resultados", text: "Monitoramos dados, otimizamos campanhas e escalamos o que traz retorno." },
];

const portfolioItems = [
  "Tráfego pago para clínica",
  "Cobertura de evento corporativo",
  "Site institucional para consultório",
  "Campanha de lançamento local",
  "Estratégia de social media",
  "Funil de captaçào para serviços",
];

const videos = ["Campanha institucional - Cliente XYZ", "Cobertura de evento - Cliente ABC"];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: WHATSAPP_URL },
];

export default function HomePage() {
  const heroAnimRef = useRef<LottieRefCurrentProps | null>(null);
  const sobreAnimRef = useRef<LottieRefCurrentProps | null>(null);
  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const sobreContainerRef = useRef<HTMLDivElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [sobreVisible, setSobreVisible] = useState(false);

  useEffect(() => {
    const handleVisibility =
      (setter: (v: boolean) => void) =>
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => setter(entry.isIntersecting));
      };

    const heroObserver = new IntersectionObserver(handleVisibility(setHeroVisible), { threshold: 0.2 });
    const sobreObserver = new IntersectionObserver(handleVisibility(setSobreVisible), { threshold: 0.2 });

    if (heroContainerRef.current) heroObserver.observe(heroContainerRef.current);
    if (sobreContainerRef.current) sobreObserver.observe(sobreContainerRef.current);

    return () => {
      heroObserver.disconnect();
      sobreObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (heroAnimRef.current) {
      heroVisible ? heroAnimRef.current.play() : heroAnimRef.current.pause();
    }
  }, [heroVisible]);

  useEffect(() => {
    if (sobreAnimRef.current) {
      sobreVisible ? sobreAnimRef.current.play() : sobreAnimRef.current.pause();
    }
  }, [sobreVisible]);

  return (
    <div className="bg-brand">
      <section id="hero" className="scroll-mt-36 md:scroll-mt-28">
        <div ref={heroContainerRef} className="relative overflow-hidden border-b border-brand/40 bg-[#4b1772]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.09),transparent_40%)]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-100">
              <div className="h-[150%] w-[150%] md:h-[160%] md:w-[160%]">
                <Lottie
                  lottieRef={heroAnimRef}
                  animationData={bgAnimation}
                  loop
                  autoplay={false}
                  rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                />
              </div>
            </div>
            <Reveal>
              <div>
                <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  <span className="hero-line-a block text-brand">Você vive</span>
                  <span className="hero-line-b block text-[var(--accent)]">a gente posta</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text)]/90">
                  Sua agência digital completa para estratégias de marketing que impulsionam seu negócio
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/helphour#servicos"
                    className="btn-pop rounded-full border border-[var(--text)] bg-[var(--text)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#370f49]"
                  >
                    Nossos serviços
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pop rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#370f49]"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="relative mx-auto w-full max-w-[760px]">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent)]/20 blur-xl" />
                <div className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-white/10 blur-xl" />
                <div className="relative h-[420px] overflow-hidden rounded-[3rem] border border-white/20 bg-white/5 shadow-2xl sm:h-[520px] md:h-[580px]">
                  <Image
                    src="/hero-casal.svg"
                    alt="Equipe Help Hour MKT"
                    width={1080}
                    height={1080}
                    className="h-full w-full scale-[1.15] object-contain object-center sm:scale-[1.2] md:scale-[1.25]"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="relative scroll-mt-36 bg-[var(--text)] py-16 text-[#0f1120] md:scroll-mt-28 overflow-hidden"
      >
        {/* Fundo animado */}
        <div
          ref={sobreContainerRef}
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-100"
        >
          <div className="h-[150%] w-[150%] md:h-[160%] md:w-[160%]">
            <Lottie
              lottieRef={sobreAnimRef}
              animationData={bgAnimation}
              loop
              autoplay={false}
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-40">
          <Lottie 
            animationData={arrowDown}
            loop={true}
            autoplay={true}
            className="w-35 h-35"
        />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <Reveal>
            <div className="relative mx-auto h-[440px] w-full max-w-[760px] overflow-hidden rounded-[2.2rem] border border-white/25 bg-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.15)] backdrop-blur-sm sm:h-[540px] md:h-[600px]">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent)]/20 blur-xl" />
              <div className="absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-[#66477b]/30 blur-2xl" />
              <Image
                src="/sobre-nos.svg"
                alt="Profissional da Help Hour MKT"
                width={900}
                height={1100}
                className="relative z-10 h-full w-full object-contain object-center"
              />
            </div>
          </Reveal>
          
          <Reveal delayMs={120}>
            <div className="space-y-5">
              <article className="rounded-[1.8rem] border border-white/35 bg-white/90 p-7 shadow-[0_16px_32px_rgba(0,0,0,0.08)] backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#4c1276]">Sobre nós</p>
                <h2 className="mt-2 text-3xl font-black text-[#2b2e3f]">
                  A HelpHour é a parceira que faz o digital virar resultado
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#2b2e3f]">
                  Fundada em 2021, a Help Hour MKT nasceu para gerar resultado real para empresas locais através de
                  estratégias digitais que conectam marca e público certo.
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#2b2e3f]">
                  Nosso time integra criação, performance e tecnologia para entregar campanhas, conteúdo e páginas que
                  convertem em clientes.
                </p>
              </article>

              {[
                { title: "Criatividade", text: "Soluções inovadoras" },
                { title: "Equipe", text: "Especialistas dedicados" },
                { title: "Resultados", text: "Estratégias orientadas a dados" },
                { title: "Inovaçào", text: "Sempre em evoluçào" },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/35 bg-white/90 p-4 shadow-[0_10px_22px_rgba(0,0,0,0.07)] backdrop-blur-sm text-center"
                >
                  <p className="text-sm font-bold uppercase text-[#4c1276]">{item.title}</p>
                  <p className="mt-2 text-sm text-[#2b2e3f]">{item.text}</p>
                </article>
              ))}
            </div>
            
          </Reveal>
          
        </div>
      </section>
      <section id="servicos" className="scroll-mt-36 bg-[var(--text)] py-16 text-[#0f1120] md:scroll-mt-28">
        <Reveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">
            Nossos <span className="text-[#66477b]">Serviços</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#2b2e3f]">
            Soluçàµes completas para presença digital, captaçào de clientes e crescimento comercial.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border-t-4 border-[#4c1276] bg-white p-6 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-lg font-extrabold uppercase text-[#4c1276]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2b2e3f]">{service.text}</p>
                <ul className="mt-4 space-y-1 text-sm text-[#2b2e3f]">
                  {service.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <Link
                  href="/helphour/servicos"
                  className="btn-pop mt-5 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#4c1276]"
                >
                  Saiba mais
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
      <section id="processo" className="scroll-mt-36 bg-[#4b1772] py-16 md:scroll-mt-28">
        <Reveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">
            <span className="text-[var(--accent)]">Como</span> <span className="text-brand">Trabalhamos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[var(--text)]/85">
            Nossa estratégia é focada em resultado, processo claro e atendimento próximo.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-brand/35 bg-brand/35 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#9a74b3] text-2xl font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-2xl font-extrabold uppercase text-[var(--accent)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text)]/90">{step.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="portfolio" className="scroll-mt-36 bg-[var(--text)] py-16 text-[#0f1120] md:scroll-mt-28">
        <Reveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">
            Nosso <span className="text-[#66477b]">Portfólio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#2b2e3f]">
            Estrutura pronta para receber estudos de caso, imagens e resultados de cada projeto.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-[#66477b]/25 bg-[linear-gradient(160deg,#2d0d45,#4c1276)] p-5 text-white shadow-md"
              >
                <div className="h-40 rounded-xl border border-white/20 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent)]" />
                <h3 className="mt-4 text-lg font-bold uppercase text-[var(--accent)]">{item}</h3>
                <p className="mt-2 text-sm text-white/90">Espaço para resumo do case e resultado principal.</p>
                <button className="btn-pop mt-4 rounded-full bg-[#9a74b3] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  Ver projeto
                </button>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="videos" className="scroll-mt-36 bg-[#4b1772] py-16 md:scroll-mt-28">
        <Reveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">
            <span className="text-[var(--accent)]">Nossos</span> <span className="text-brand">Vídeos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[var(--text)]/85">
            Área para vídeos de eventos, campanhas e bastidores de projetos.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {videos.map((title) => (
              <article key={title} className="rounded-2xl border border-brand/30 bg-brand/45 p-4">
                <div className="h-56 rounded-xl border border-white/20 bg-[linear-gradient(180deg,#b7d6e9_0%,#cde5f2_55%,#76a300_56%,#76a300_100%)]" />
                <p className="mt-4 text-center text-lg text-brand">{title}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/helphour/videos"
              className="btn-pop inline-flex rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-bold uppercase tracking-wide text-[#4c1276]"
            >
              Ver mais vídeos
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="contato" className="scroll-mt-36 bg-[var(--text)] py-16 text-[#0f1120] md:scroll-mt-28">
        <Reveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">
            Entre em <span className="text-[#66477b]">Contato</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-[#2b2e3f]">
            Estamos prontos para atender sua empresa e criar soluçàµes personalizadas para o seu negócio.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="space-y-4 rounded-2xl border border-[#66477b]/20 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-extrabold uppercase text-[#4c1276]">Informaçàµes de contato</h3>
              <div>
                <p className="text-sm font-bold uppercase text-[#4c1276]">Endereço</p>
                <p className="text-base">Av. do Batel, 1868 - Batel, 4Âº andar</p>
                <p className="text-base">Curitiba - PR, 80420-090</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-[#4c1276]">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-base underline">
                  (85) 99000-0000
                </a>
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-[#4c1276]">E-mail</p>
                <a href="mailto:contato@helphourmkt.com.br" className="text-base underline">
                  contato@helphourmkt.com.br
                </a>
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-[#4c1276]">Redes sociais</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pop rounded-full border border-[#66477b]/40 px-3 py-1 text-sm"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>

            <form className="space-y-4 rounded-2xl border border-[#66477b]/20 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-extrabold uppercase text-[#4c1276]">Envie sua mensagem</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="nome">
                  Nome
                  <input
                    id="nome"
                    name="nome"
                    className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                  />
                </label>
                <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="email">
                  E-mail
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="telefone">
                  Telefone
                  <input
                    id="telefone"
                    name="telefone"
                    className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                  />
                </label>
                <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="servico">
                  Serviço de interesse
                  <input
                    id="servico"
                    name="servico"
                    className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                  />
                </label>
              </div>
              <label className="block text-sm font-semibold uppercase text-[#4c1276]" htmlFor="mensagem">
                Mensagem
                <textarea
                  id="mensagem"
                  name="mensagem"
                  className="mt-1 h-32 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                />
              </label>
              <button
                type="submit"
                className="btn-pop inline-flex rounded-full bg-[#4c1276] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
