"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/5585990000000";

const services = [
  {
    id: "social-media",
    label: "Social Media",
    title: "Conteúdo que posiciona e gera presença",
    description:
      "Criação de posts estratégicos com identidade visual consistente. Não é só postar: é construir percepção e autoridade.",
    features: [
      "Design de posts profissionais",
      "Planejamento de conteúdo",
      "Linha editorial clara",
      "Conteúdo voltado para engajamento",
      "Gerenciamento de perfil",
    ],
    result: "Perfil mais forte e consistente",
    type: "imagens",
  },
  {
    id: "eventos",
    label: "Cobertura de Eventos",
    title: "Vídeos curtos que capturam o momento",
    description:
      "Registros rápidos e impactantes para redes sociais. Ideal para eventos, bastidores e conteúdos dinâmicos.",
    features: [
      "Captação profissional",
      "Edição dinâmica (estilo Reels)",
      "Entrega rápida",
      "Conteúdo pronto para redes sociais",
    ],
    result: "Conteúdo que chama atenção e gera compartilhamento",
    type: "vídeos",
  },
  {
    id: "conteudo",
    label: "Conteúdo Estratégico",
    title: "Imagem + vídeo com intenção",
    description: "Produção pensada para vender, engajar e fortalecer a marca ao mesmo tempo.",
    features: [
      "Roteiro estratégico",
      "Captação híbrida (foto + vídeo)",
      "Direcionamento de comunicação",
      "Conteúdo com objetivo claro",
    ],
    result: "Mais clareza na comunicação e resultados consistentes",
    type: "conteúdo completo",
  },
];

export default function PortfolioPage() {
  return (
    <main className="overflow-x-hidden bg-[#0f051a] text-white selection:bg-[var(--accent)]/30">
      <section className="relative isolate flex min-h-[78dvh] items-center overflow-hidden border-b border-white/10 bg-[#07020f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(125,56,255,0.28),transparent_46%),radial-gradient(ellipse_at_80%_10%,rgba(255,90,193,0.24),transparent_44%),radial-gradient(ellipse_at_18%_85%,rgba(0,194,255,0.2),transparent_48%),linear-gradient(145deg,#07020f_0%,#120422_45%,#080316_100%)]" />

        <motion.div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at 80% 30%, rgba(224,184,69,0.22), transparent 28%), radial-gradient(circle at 60% 80%, rgba(103,66,255,0.24), transparent 32%)",
            backgroundSize: "140% 140%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 40%", "30% 100%", "0% 0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />

        {[1, 2, 3].map((orb) => (
          <motion.div
            key={orb}
            className={`absolute rounded-full blur-3xl ${
              orb === 1
                ? "left-[6%] top-[12%] h-44 w-44 bg-fuchsia-500/25 sm:h-64 sm:w-64"
                : orb === 2
                ? "right-[10%] top-[18%] h-40 w-40 bg-violet-500/30 sm:h-60 sm:w-60"
                : "bottom-[8%] left-[30%] h-36 w-36 bg-sky-500/25 sm:h-56 sm:w-56"
            }`}
            animate={{
              y: orb === 2 ? [0, -18, 0] : [0, 16, 0],
              x: orb === 3 ? [0, 10, 0] : [0, -10, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: orb === 1 ? 11 : orb === 2 ? 14 : 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left"
          >
            <div className="rounded-[1.8rem] border border-white/20 bg-white/[0.06] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8 lg:p-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f5d67d]"
              >
                Serviços e Estratégia
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="mb-6 text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-6xl"
              >
                Conteúdo visual que gera{" "}
                <span className="bg-[linear-gradient(90deg,#e9d5ff_0%,#a5b4fc_35%,#f0abfc_70%,#f5d67d_100%)] bg-clip-text text-transparent">
                  presença
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.26 }}
                className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0"
              >
                Posts bem construídos e vídeos curtos que realmente mostram o valor do seu negócio no digital.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  Social Mídia
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  Captação e Edição
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  Mais clientes para o seu negócio
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  Tráfego pago
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.38 }}
                className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#f7da83] via-[#f5c95a] to-[#e8a63d] px-8 py-4 text-center font-bold text-[#240b36] shadow-[0_14px_34px_rgba(245,201,90,0.35)] transition-all"
                  >
                    <span className="relative z-10">Fazer orçamento</span>
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(120deg,transparent_10%,rgba(255,255,255,0.45)_50%,transparent_90%)]"
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "linear" }}
                    />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    href="https://www.instagram.com/helphourmkt/reels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-xl transition hover:border-white/35 hover:bg-white/15"
                  >
                    Ver trabalhos
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(165,90,255,0.14),transparent_34%),radial-gradient(circle_at_85%_22%,rgba(236,72,153,0.14),transparent_32%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.12),transparent_35%)]" />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 32%, rgba(255,255,255,0.08) 64%, rgba(255,255,255,0.01) 100%)",
            backgroundSize: "220% 220%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {services.map((service, index) => {
              const isReverse = index % 2 === 1;

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.08 * index }}
                  className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
                    isReverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="group relative aspect-square w-full max-h-[420px] overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:aspect-[4/5] lg:max-h-[560px]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(236,72,153,0.28),transparent_38%),radial-gradient(circle_at_75%_80%,rgba(125,56,255,0.32),transparent_44%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.28)_50%,transparent_85%)]"
                      animate={{ x: ["-130%", "130%"] }}
                      transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 2.1, ease: "linear" }}
                    />

                    <div className="absolute left-4 top-4 h-8 w-8 rounded-full border border-white/30 bg-white/10 backdrop-blur-md" />
                    <div className="absolute bottom-5 right-5 h-10 w-10 rounded-full border border-white/20 bg-[var(--accent)]/20 backdrop-blur-md" />

                    <div className="relative flex h-full items-center justify-center p-8">
                      <p className="text-center text-sm font-medium uppercase tracking-widest text-white/55 transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-base">
                        {"[ Espaço para "}
                        {service.type}
                        {" ]"}
                      </p>
                    </div>
                  </motion.div>

                  <div className="space-y-6 text-center lg:text-left">
                    <div className="rounded-[1.6rem] border border-white/15 bg-white/[0.04] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-lg sm:p-6">
                      <span className="mb-4 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                        {service.label}
                      </span>
                      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{service.title}</h2>
                      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
                        {service.description}
                      </p>
                    </div>

                    <ul className="grid gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur-md sm:gap-4 sm:p-6">
                      {service.features.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-white/85 sm:gap-4">
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20">
                            <svg className="h-4 w-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-base sm:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 text-left backdrop-blur-xl">
                      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--accent)]" />
                      <p className="mb-1 text-xs font-black uppercase tracking-widest text-white/50">Impacto direto</p>
                      <p className="text-lg font-semibold text-white sm:text-xl">{service.result}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 text-center sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(125,56,255,0.24),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.2),transparent_40%),linear-gradient(180deg,rgba(14,5,24,0.7),rgba(14,5,24,0.95))]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(224,184,69,0.32), transparent 52%)" }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-3xl px-4"
        >
          <div className="rounded-[2rem] border border-white/20 bg-white/[0.06] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-10">
            <h3 className="mb-6 text-3xl font-black text-white sm:text-4xl lg:text-5xl">Bora tirar essa ideia do papel?</h3>
            <p className="mb-10 text-base text-white/75 sm:text-xl">
              Se você quer conteúdo que realmente converte, clique no botão abaixo.
            </p>

            <motion.div whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="inline-flex w-full sm:w-auto">
              <Link
                href={WHATSAPP_URL}
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#f7da83] via-[#f5c95a] to-[#e8a63d] px-6 py-4 text-base font-black uppercase tracking-tight text-[#230b33] shadow-[0_14px_38px_rgba(245,201,90,0.35)] transition-all sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                <span className="relative z-10">Falar no WhatsApp agora</span>
                <motion.div
                  animate={{ x: ["-150%", "150%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-0 z-0 skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
