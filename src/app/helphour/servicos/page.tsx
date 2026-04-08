"use client";

import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
import Reveal from "../../components/ui/Reveal";
import Lottie from "lottie-react";
import arrowDown from "@/animations/down_arrow.json";
import instagram from "@/animations/instagram.json";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const services = [
  {
    title: "Gerenciamento de redes sociais",
    text: "Planejamento de conteúdo, design de posts e copy orientada para gerar relacionamento e vendas.",
    items: ["Planejamento mensal", "Design de posts", "Copywriting", "Análise de métricas"],
    icon: "📱",
  },
  {
    title: "Produção audiovisual",
    text: "Vídeos profissionais para stories, reels e campanhas institucionais com alto padrão visual.",
    items: ["Videomaker", "Storymaker", "Edição profissional", "Motion graphics"],
    icon: "🎥",
  },
  {
    title: "Fotografia profissional",
    text: "Fotos para produtos, equipe, espaço e campanhas com foco em credibilidade da marca.",
    items: ["Produtos", "Corporativo", "Cobertura de eventos", "Edição de imagens"],
    icon: "📸",
  },
  {
    title: "Cobertura de eventos",
    text: "Registro completo de eventos, lançamentos e ativações de marca para uso comercial.",
    items: ["Eventos corporativos", "Lançamentos", "Transmissão ao vivo", "Conteúdo em tempo real"],
    icon: "🗓️",
  },
  {
    title: "Desenvolvimento web",
    text: "Sites modernos, rápidos e responsivos para converter visitantes em contatos qualificados.",
    items: ["Site institucional", "E-commerce", "Landing pages", "Aplicativos mobile"],
    icon: "💻",
  },
  {
    title: "Marketing digital",
    text: "Gestão de campanhas de tráfego pago para gerar demanda local e aumentar o faturamento.",
    items: ["SEO", "Google Ads", "Facebook/Instagram Ads", "Email marketing"],
    icon: "📈",
  },
];

export default function ServicosPage() {
  return (
    <div className={`${workSans.className} bg-[var(--text)] text-[#0f1120]`}>
      {/* Hero inspirado no modelo (imagem 2) */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_35%),linear-gradient(135deg,#6b55e0,#7d67ec)] text-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <div className="absolute -left-16 top-6 hidden lg:flex">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-full text-[#4c1276] shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:-translate-y-1 overflow-hidden"
              >
                <Lottie
                  animationData={instagram}
                  loop={true}
                  autoplay={true}
                  className="h-50 w-50"
                />
              </a>
            </div>
            <Reveal>
              <p className="text-sm sm:text-base font-medium uppercase tracking-[0.25em] text-white/70 text-center mb-3">
                Nosso processo
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center leading-tight">
                Como resolvemos o seu problema
              </h2>

            <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
              <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-center">
                Soluções em{" "}
                <span className="rounded-lg bg-[#1e73ff] px-2 text-white">Marketing digital</span>
              </h1>
              <div className="mt-5 space-y-4 max-w-3xl text-base leading-relaxed text-white/90 text-center">
                <p>
                  Antes de tudo: quem faz tudo de uma vez, não faz nada certo. Com o planejamento certo, focamos em
                  resolver seus problemas com consistência. A arte de vender tem seu próprio processo e, ainda assim, cabe
                  a você saber se está disposto a fazer o necessário ou não.
                </p>
                <p>
                  Se você tomou a decisão de que SIM, você VAI fazer seu negócio ser lucrativo então, como resultado, como
                  uma agência de marketing digital em Fortaleza, disponibilizamos soluções como:
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/helphour#contato"
                  className="btn-pop inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#4c1276] shadow-md shadow-[rgba(0,0,0,0.2)]"
                >
                  Falar com o time
                </Link>
                <Link
                  href="/helphour"
                  className="btn-pop inline-flex rounded-full border border-white/70 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Voltar para home
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={120} className="flex-1">
            <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur">
              <Image
                src="/hero-casal.svg"
                alt="Equipe criativa da Help Hour MKT"
                width={900}
                height={900}
                className="relative z-10 h-full w-full object-contain"
                priority
              />
            </div>
          </Reveal>
        </div>
        <div className="flex items-center justify-center h-40">
          <Lottie 
            animationData={arrowDown}
            loop={true}
            autoplay={true}
            className="w-35 h-35"
        />
        </div>
      </section>
      
      {/*Cards*/}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[18px] border border-white/35 bg-[linear-gradient(145deg,#7a62e8,#8a75f2)] p-8 shadow-[0_18px_36px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_52px_rgba(0,0,0,0.22)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_55%)] opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-extrabold uppercase text-white drop-shadow-sm">{service.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{service.text}</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6b01e] text-xl text-[#4c1276] shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:-translate-y-1">
                    {service.icon}
                  </span>
                </div>
                <ul className="relative mt-4 space-y-2 text-sm text-white">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[2px] text-[#f6b01e]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-6 flex">
                  <Link
                    href="/helphour#contato"
                    className="inline-flex rounded-full bg-[#f6b01e] px-5 py-2 text-xs font-bold uppercase tracking-wide text-[#4c1276] shadow-md shadow-[rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Solicitar proposta
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
