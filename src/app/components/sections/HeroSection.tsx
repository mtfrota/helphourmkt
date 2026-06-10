"use client";

import Image from "next/image";

import Reveal from "../ui/Reveal";
import SectionBadge from "../ui/SectionBadge";
import { useBrandAnalyzerStore } from "@/app/store/brandAnalyzerStore"

const SERVICE_TAGS: string[] = [
  "Estratégia",
  "Conteúdo",
  "Tráfego",
  "Social Media",
  "Cobertura de Eventos"
];


export default function HeroSection() {
  const { setOpen } =
    useBrandAnalyzerStore()
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#120916]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,110,255,0.14),transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.35))]" />

      {/* Glow accents */}
      <div className="absolute left-30 top-[10%] h-80 w-[320px] rounded-full bg-[#b56eff]/10 blur-3xl" />

      <div className="absolute bottom-35 right-25 h-90 w-90 rounded-full bg-[#7b2cbf]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[92vh] min-w-0 max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_.95fr]">
        {/* Left content */}
        <Reveal>
          <div
            className="relative z-10 min-w-0"
            style={{ width: "min(100%, calc(100vw - 3rem))", maxWidth: "42rem" }}
          >
            <SectionBadge
              className="
                w-full
                hero-mobile-bound
                border border-white/10
                bg-white/3
                px-4
                py-2
                text-[11px]
                leading-relaxed
                tracking-[0.11em]
                text-[#d8c6ea]
                backdrop-blur-sm
                sm:w-auto
                sm:text-sm
                sm:tracking-[0.14em]
              "
            >
              Atendimento próximo • Estratégia real • exclusividade
            </SectionBadge>

            <h1 className="hero-mobile-bound hero-copy-wide mt-6 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              Sua marca precisa
              <span className="block bg-linear-to-r from-white to-[#c88cff] bg-clip-text text-transparent">
                ser lembrada.
              </span>
            </h1>

            <p className="hero-mobile-bound hero-copy-text mt-8 wrap-break-word text-base leading-relaxed text-[#cbbfd7] sm:text-lg">
              Criamos campanhas, conteúdo e presença digital
              para empresas que querem crescer sem parecer
              iguais a todo mundo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => setOpen(true)}
                className="
                  inline-flex items-center justify-center
                  hero-mobile-fill
                  rounded-full
                  bg-[#c88cff]
                  px-7 py-3.5
                  text-sm font-medium
                  text-[#1a0d22]
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:bg-[#d19cff]
                "
              >
                Analisar minha marca
              </button>
            </div>

            {/* Bottom info */}
            <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-[#a89ab7]">
              <div>
                <span className="block text-2xl font-semibold text-white">
                  +50
                </span>

                <span>projetos criativos</span>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <span className="block text-2xl font-semibold text-white">
                  Atendimento
                </span>

                <span>próximo e estratégico</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right content */}
        <Reveal delayMs={120}>
          <div
            className="hero-mobile-bound hero-media-bound relative mx-auto w-full"
            style={{ width: "min(100%, calc(100vw - 3rem))" }}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-4xl bg-[#b56eff]/10 blur-3xl" />

            {/* Image wrapper */}
            <div
              className="
                relative overflow-hidden
                rounded-4xl
                border border-white/10
                bg-[#1a1022]
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >
              <div className="absolute inset-0 z-10 bg-linear-to-t from-[#120916]/70 via-transparent to-transparent" />

              <Image
                src="/hero-casal.webp"
                alt="Equipe Help Hour"
                width={1200}
                height={1400}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Floating card */}
            <div
              className="
                absolute bottom-4 left-4 right-4 z-20
                w-auto
                overflow-hidden
                rounded-3xl
                border border-[#c88cff]/15
                bg-[#1b1023]/85
                px-5.5 py-5
                shadow-[0_24px_64px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.05)]
                backdrop-blur-2xl
                sm:bottom-6 sm:left-6 sm:right-auto sm:w-75

                before:pointer-events-none
                before:absolute
                before:inset-0
                before:rounded-3xl
                before:bg-linear-to-br
                before:from-[#c88cff]/25
                before:via-transparent
                before:to-[#b56eff]/10
                before:p-px
                before:mask-exclude
                before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
              "
            >
              {/* Header */}
              <div className="mb-3.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full
                      bg-purple-500
                      shadow-[0_0_6px_rgba(168,85,247,0.8)]
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.20em]
                      text-[#caa8eb]/60
                    "
                  >
                    Ativo agora
                  </span>
                </div>

                <span
                  className="
                    rounded-full
                    border border-[#c88cff]/20
                    bg-[#c88cff]/10
                    px-2.5 py-0.5
                    text-[9px]
                    font-bold
                    tracking-[0.14em]
                    text-[#c88cff]
                  "
                >
                  HelpHour
                </span>
              </div>

              {/* Divider */}
              <div className="mb-3.5 h-px bg-linear-to-r from-[#c88cff]/18 to-transparent" />

              {/* Headline */}
              <p
                className="
                  mb-4
                  text-xl
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-white
                "
              >
                Presença digital
                <span className="block bg-linear-to-r from-[#c88cff] to-[#e0b8ff] bg-clip-text text-transparent">
                  com identidade.
                </span>
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-[1fr_1px_1fr]">
                <div className="py-2">
                  <div className="mb-1 text-[18px] font-bold leading-none tracking-[-0.03em] text-white">
                    +50
                    <span className="text-[12px] font-medium text-[#c88cff]">
                      {" "}
                      Projetos
                    </span>
                  </div>

                  <div className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#caa8eb]/50">
                    Entregues
                  </div>
                </div>

                <div className="mx-0 my-2 w-px bg-[#c88cff]/15" />

                <div className="py-2 pl-3.5">
                  <div className="mb-1 text-[18px] font-bold leading-none tracking-[-0.03em] text-white">
                    24
                    <span className="text-[12px] font-medium text-[#c88cff]">
                      h
                    </span>
                  </div>

                  <div className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#caa8eb]/50">
                    Resposta
                  </div>
                </div>
              </div>

              {/* Service tags */}
              <div className="mt-3.5 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
                {SERVICE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border border-[#c88cff]/10
                      bg-[#c88cff]/6
                      px-2.5 py-1
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#caa8eb]/55
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
