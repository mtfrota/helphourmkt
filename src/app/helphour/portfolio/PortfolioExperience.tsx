"use client";

import { WHATSAPP_URL } from "@/app/content/home";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Check, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const INSTAGRAM_REELS_URL = "https://www.instagram.com/helphourmkt/reels/";

/* ─────────────────────────── types ─────────────────────────── */

type InstagramData = {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
  handle: string;
  profileName: string;
  subtitle: string;
  profilePreviewImage: string;
  profilePreviewAlt: string;
  points: string[];
};

type ModalConfig = {
  profiles: InstagramData[];
};

type PortfolioPageItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  result: string;
  image: string;
  alt: string;
  points: string[];
  modalKey?: string; // qual modal abrir
};

/* ─────────────────────────── data ─────────────────────────── */

const portfolioPageItems: PortfolioPageItem[] = [
  {
    id: "trafego",
    category: "Tráfego pago",
    title: "Campanhas focadas em demanda real",
    description:
      "Criativos, páginas e otimizações pensadas para transformar atenção em contatos qualificados.",
    result: "",
    image: "/portfolio/trafego.png",
    alt: "Arte de portfólio sobre tráfego pago e crescimento de resultados",
    points: ["Meta Ads e Google Ads", "Funil de captação", "Relatórios de performance"],
    modalKey: "trafego",
  },
  {
    id: "eventos",
    category: "Cobertura de eventos",
    title: "Registros que viram conteúdo de impacto",
    description:
      "Captação e edição dinâmica para eventos, bastidores e momentos que precisam circular rápido nas redes.",
    result: "",
    image: "/portfolio/cam01.jpeg",
    alt: "Câmera profissional em cobertura de evento",
    points: ["Captação profissional", "Edição estilo Reels", "Entrega pronta para postar"],
    modalKey: "eventos",
  },
  {
    id: "sites",
    category: "Desenvolvimento de LandingPages",
    title: "Presença digital com mais clareza",
    description:
      "Sites modernos, rápidos e responsivos para apresentar a marca e facilitar o caminho até o contato.",
    result: "",
    image: "/portfolio/sites.png",
    alt: "Notebook exibindo projeto de site institucional",
    points: ["Layout responsivo", "SEO técnico", "Experiência orientada à conversão"],
    // sem modalKey → não é clicável
  },
  {
    id: "social-media",
    category: "Social media",
    title: "Conteúdo consistente para fortalecer marca",
    description:
      "Posts estratégicos com identidade visual, linha editorial e intenção clara para criar presença.",
    result: "+engajamento",
    image: "/portfolio/img.png",
    alt: "Peças visuais de social media em formato de feed",
    points: ["Design de posts", "Planejamento mensal", "Gestão de perfil"],
    modalKey: "social-media",
  },
];

/* ── Perfis por modal ── */

// Modal: Tráfego Pago — 3 perfis
const trafegoprofiles: InstagramData[] = [
  {
    id: "pianowski",
    category: "Tráfego pago",
    title: "Campanhas focadas em demanda real",
    description:
      "Criativos, páginas e otimizações pensadas para transformar atenção em contatos qualificados.",
    url: "https://www.instagram.com/pianowskicirurgia/",
    handle: "@pianowskicirurgia",
    profileName: "Pianowski Cirurgia",
    subtitle: "Perfil conectado ao trabalho de tráfego pago",
    profilePreviewImage: "/portfolio/instagram/pianoski.png",
    profilePreviewAlt: "Print do perfil Pianowski Cirurgia",
    points: ["Meta Ads e Google Ads", "Funil de captação", "Relatórios de performance"],
  },
  {
    id: "petitpoa",
    category: "Tráfego pago",
    title: "Campanhas focadas em demanda real",
    description:
      "Criativos, páginas e otimizações pensadas para transformar atenção em contatos qualificados.",
    url: "https://www.instagram.com/petitpoabuffet/",
    handle: "@petitpoabuffet",
    profileName: "Petit Poá Buffet",
    subtitle: "Perfil conectado ao trabalho de tráfego pago",
    profilePreviewImage: "/portfolio/instagram/petitpoa.png",
    profilePreviewAlt: "Print do perfil Petit Poá Buffet",
    points: ["Meta Ads e Google Ads", "Funil de captação", "Relatórios de performance"],
  },
  {
    id: "elizaine",
    category: "Tráfego pago",
    title: "Campanhas focadas em demanda real",
    description:
      "Criativos, páginas e otimizações pensadas para transformar atenção em contatos qualificados.",
    url: "https://www.instagram.com/draelizaine/",
    handle: "@draelizaine",
    profileName: "Dra. Elizaine",
    subtitle: "Perfil conectado ao trabalho de tráfego pago",
    profilePreviewImage: "/portfolio/instagram/dentista1.png",
    profilePreviewAlt: "Print do perfil Dra. Elizaine",
    points: ["Meta Ads e Google Ads", "Funil de captação", "Relatórios de performance"],
  },
];

// Modal: Cobertura de Eventos — 1 perfil
const eventosProfiles: InstagramData[] = [
  {
    id: "petitpoa-eventos",
    category: "Cobertura de eventos",
    title: "Registros que viram conteúdo de impacto",
    description:
      "Captação e edição dinâmica para eventos, bastidores e conteúdo de alta retenção.",
    url: "https://www.instagram.com/petitpoabuffet/",
    handle: "@petitpoabuffet",
    profileName: "Petit Poá Buffet",
    subtitle: "Reels e registros de cobertura de eventos",
    profilePreviewImage: "/portfolio/instagram/petitpoa.png",
    profilePreviewAlt: "Print do perfil Petit Poá Buffet",
    points: ["Captação profissional", "Edição estilo Reels", "Entrega pronta para postar"],
  },
];

// Modal: Social Media — 1 perfil
const socialMediaProfiles: InstagramData[] = [
  {
    id: "sarah",
    category: "Social media",
    title: "Conteúdo consistente para fortalecer marca",
    description:
      "Posts estratégicos com identidade visual e posicionamento profissional.",
    url: "https://www.instagram.com/sarahdantaz/",
    handle: "@sarahdantaz",
    profileName: "Sarah Dantas",
    subtitle: "Perfil administrado com estratégia social media",
    profilePreviewImage: "/portfolio/instagram/sarah.png",
    profilePreviewAlt: "Print do perfil Sarah Dantas",
    points: ["Design de posts", "Planejamento mensal", "Gestão de perfil"],
  },
];

// Mapa modal key → lista de perfis
const modalConfigMap: Record<string, ModalConfig> = {
  trafego: { profiles: trafegoprofiles },
  eventos: { profiles: eventosProfiles },
  "social-media": { profiles: socialMediaProfiles },
};

/* ─────────────────────────── service blocks ─────────────────────────── */

const serviceBlocks = [
  {
    label: "Social media",
    text: "Planejamento, design e copy para perfis que precisam parecer vivos, claros e confiáveis.",
  },
  {
    label: "Eventos",
    text: "Captação rápida e edição dinâmica para transformar presença física em alcance digital.",
  },
  {
    label: "Sites",
    text: "Páginas institucionais e landing pages que organizam a oferta e facilitam a conversão.",
  },
  {
    label: "Tráfego pago",
    text: "Campanhas acompanhadas por dados para gerar demanda e melhorar custo por oportunidade.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */

export default function PortfolioExperience() {
  // null = fechado; string = qual modal abrir
  const [activeModalKey, setActiveModalKey] = useState<string | null>(null);

  const activeConfig = activeModalKey ? modalConfigMap[activeModalKey] : null;

  /* lock body scroll & handle Esc */
  useEffect(() => {
    if (!activeModalKey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalKey(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalKey]);

  return (
    <div className="overflow-x-hidden bg-[#0c0415] text-white selection:bg-[#f5d67d]/30">
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── PORTFOLIO GRID ── */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(125,56,255,0.14),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(224,184,69,0.12),transparent_30%),linear-gradient(180deg,#0c0415_0%,#12051f_100%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          {/* section header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-[#f5d67d]/20 bg-[#f5d67d]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d67d]">
              Galeria principal
            </span>
            <h2 className="mt-5 font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Quatro frentes,{" "}
              <span className="bg-gradient-to-r from-[#fff3cf] via-[#f5d67d] to-[#e0b845] bg-clip-text text-transparent">
                uma presença mais forte
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Cada projeto abaixo representa uma parte do trabalho: criar, captar, estruturar e
              distribuir conteúdo com intenção.
            </p>
          </div>

          {/* cards grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {portfolioPageItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                onOpen={
                  item.modalKey
                    ? () => setActiveModalKey(item.modalKey!)
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      <ServiceBlocksSection />

      {/* ── FINAL CTA ── */}
      <CtaSection />

      {/* ── MODAL ── */}
      <AnimatePresence>
        {activeConfig && (
          <InstagramPreviewModal
            key={activeModalKey}
            profiles={activeConfig.profiles}
            onClose={() => setActiveModalKey(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#07020f]">
      {/* background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_10%,rgba(125,56,255,0.22),transparent_42%),radial-gradient(ellipse_at_88%_20%,rgba(224,184,69,0.16),transparent_36%),linear-gradient(145deg,#07020f_0%,#130522_56%,#090314_100%)]" />

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7d38ff]/20 blur-[100px] sm:h-[520px] sm:w-[520px] lg:h-[620px] lg:w-[620px] lg:blur-[140px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />

      <motion.div
        aria-hidden
        className="absolute left-[-10%] top-0 h-px w-[120%] bg-gradient-to-r from-transparent via-[#f5d67d]/60 to-transparent"
        animate={{ x: ["-10%", "10%", "-10%"], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto grid min-h-[80svh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-8 lg:py-28">
        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:order-1 lg:text-left"
        >
          {/* eyebrow */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#f5d67d]/20 bg-[#f5d67d]/10 px-4 py-1.5 backdrop-blur-xl">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#f5d67d]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5d67d] sm:tracking-[0.22em]">
              Projetos reais • Sem template genérico
            </span>
          </div>

          {/* title */}
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-black leading-[0.96] tracking-tight text-white sm:text-5xl lg:mx-0 lg:text-[4.5rem]">
            Sua marca com aparência de{" "}
            <span className="bg-linear-to-r from-[#fff3cf] via-[#f5d67d] to-[#e0b845] bg-clip-text text-transparent">
              empresa grande
            </span>
          </h1>

          {/* subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-7 sm:text-base lg:mx-0 lg:text-lg">
            Sites, social media, tráfego pago e conteúdo visual desenvolvidos para gerar
            presença, profissionalismo e conversão de verdade.
          </p>

          {/* service pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
            {["Social Media", "Captação e edição", "Sites", "Tráfego pago"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65 backdrop-blur-md transition hover:border-[#f5d67d]/20 hover:bg-white/10 sm:px-4"
              >
                {item}
              </span>
            ))}
          </div>

          {/* social proof */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white/50 sm:gap-6 sm:text-sm lg:justify-start">
            <span>
              <strong className="font-bold text-[#f5d67d]">+40</strong> projetos entregues
            </span>
            <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />
            <span>
              <strong className="font-bold text-[#f5d67d]">100%</strong> personalizados
            </span>
            <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />
            <span>foco em conversão</span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <GoldButton href={WHATSAPP_URL}>Fazer orçamento</GoldButton>

            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={INSTAGRAM_REELS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              >
                Ver trabalhos
                <ExternalLink className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 hidden items-center justify-center lg:flex lg:order-2"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── hero mockup ─── */
function HeroMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[620px]"
    >
      <div className="absolute inset-0 rounded-[36px] bg-[#f5d67d]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-3">
        <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />
          <div className="ml-2 h-3 flex-1 rounded-full bg-white/5" />
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#0d0617]">
          <div className="h-40 bg-[radial-gradient(circle_at_top_left,rgba(125,56,255,0.35),transparent_40%),linear-gradient(135deg,#160726,#0b0413)] p-5 sm:h-48 sm:p-6">
            <div className="h-3 w-20 rounded-full bg-[#f5d67d]/80 sm:w-24" />
            <div className="mt-5 h-5 w-3/4 rounded-full bg-white/90 sm:h-6" />
            <div className="mt-2.5 h-5 w-1/2 rounded-full bg-white/70 sm:h-6" />
            <div className="mt-6 flex gap-3">
              <div className="h-9 w-28 rounded-full bg-[#f5d67d] sm:w-32" />
              <div className="h-9 w-20 rounded-full border border-white/15 bg-white/5 sm:w-24" />
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:p-5 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div
                  className="h-24 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(125,56,255,${0.2 + i * 0.07}), rgba(245,214,125,${0.08 + i * 0.04}))`,
                  }}
                />
                <div className="mt-4 h-3 w-3/4 rounded-full bg-white/70" />
                <div className="mt-2 h-3 w-1/2 rounded-full bg-white/40" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-8 hidden rounded-2xl border border-white/10 bg-[#12081d]/90 p-4 shadow-2xl backdrop-blur-xl xl:block"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
          Alcance
        </p>
        <p className="mt-1 text-3xl font-black text-[#f5d67d]">+240%</p>
        <p className="mt-1 text-xs text-white/60">aumento em engajamento</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 bottom-8 hidden rounded-2xl border border-white/10 bg-[#12081d]/90 p-4 shadow-2xl backdrop-blur-xl xl:block"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
          Conversão
        </p>
        <div className="mt-2 flex items-end gap-2">
          <p className="text-3xl font-black text-[#f5d67d]">3x</p>
          <span className="pb-1 text-xs text-white/60">mais resultados</span>
        </div>
        <div className="mt-3 flex items-end gap-1">
          {[40, 64, 32, 80, 52].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-full bg-[#f5d67d]"
              style={{ height: h, opacity: 0.55 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO CARD
═══════════════════════════════════════════════════════════════ */

function PortfolioCard({
  item,
  index,
  onOpen,
}: {
  item: PortfolioPageItem;
  index: number;
  onOpen?: () => void;
}) {
  const isClickable = !!onOpen;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={[
        "group overflow-hidden rounded-3xl border bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300",
        isClickable
          ? "cursor-pointer border-white/10 hover:border-[#f5d67d]/30 hover:bg-white/[0.07] hover:shadow-[0_24px_70px_rgba(245,214,125,0.08)]"
          : "border-white/10",
      ].join(" ")}
      onClick={isClickable ? onOpen : undefined}
    >
      {/* image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0415]/95 via-[#0c0415]/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-[#f5d67d]/30 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f5d67d] backdrop-blur-md">
          {item.category}
        </div>

        {item.result && (
          <div className="absolute bottom-4 left-4 rounded-full bg-[#f5d67d]/15 px-3 py-1 text-sm font-black text-[#f5d67d] backdrop-blur-md">
            {item.result}
          </div>
        )}

        {isClickable && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/70 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <Camera className="h-3 w-3" aria-hidden />
            ver perfil
          </div>
        )}
      </div>

      {/* body */}
      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
          {item.description}
        </p>

        <ul className="mt-5 grid gap-2.5">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5d67d]/15 text-[#f5d67d]">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              {point}
            </li>
          ))}
        </ul>

        {isClickable && (
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f5d67d]/25 bg-[#f5d67d]/10 px-5 py-2.5 text-sm font-bold text-[#f5d67d] transition hover:bg-[#f5d67d]/20"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            <Camera className="h-4 w-4" aria-hidden />
            Ver perfil
          </button>
        )}
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICE BLOCKS
═══════════════════════════════════════════════════════════════ */

function ServiceBlocksSection() {
  return (
    <section className="relative overflow-hidden bg-[#12051f] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f5d67d]/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceBlocks.map((service, index) => (
            <motion.article
              key={service.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-[#f5d67d]/25 hover:bg-white/[0.07]"
            >
              <div className="mb-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#f5d67d] to-[#e0b845] transition-all duration-300 group-hover:w-14" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f5d67d]">
                {service.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                {service.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA SECTION
═══════════════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-center sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(224,184,69,0.18),transparent_36%),linear-gradient(180deg,#12051f_0%,#090314_100%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5d67d]/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5d67d]/8"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-3xl px-4"
      >
        <span className="inline-block rounded-full border border-[#f5d67d]/20 bg-[#f5d67d]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d67d]">
          Próximo projeto
        </span>

        <h2 className="mt-6 font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          Bora colocar seu negócio nessa vitrine?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Se você quer conteúdo com aparência profissional, intenção comercial e constância, o
          próximo passo é uma conversa rápida.
        </p>

        <div className="mt-10">
          <GoldButton href={WHATSAPP_URL} large>
            Falar no WhatsApp agora
          </GoldButton>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INSTAGRAM PREVIEW MODAL
═══════════════════════════════════════════════════════════════ */

function InstagramPreviewModal({
  profiles,
  onClose,
}: {
  profiles: InstagramData[];
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const profile = profiles[activeIndex];

  const nextProfile = () =>
    setActiveIndex((prev) => (prev + 1) % profiles.length);

  const prevProfile = () =>
    setActiveIndex((prev) =>
      prev === 0 ? profiles.length - 1 : prev - 1
    );

  const showNav = profiles.length > 1;

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-50
        flex
        items-end
        justify-center
        overflow-hidden
        bg-black/80
        px-4
        py-6
        backdrop-blur-xl

        sm:items-center
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* cinematic background */}
      <motion.div
        aria-hidden
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7d38ff]/10
          blur-[140px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        className="
          relative
          max-h-[94dvh]
          w-full
          max-w-6xl
          overflow-y-auto
          rounded-[2.2rem]
          border
          border-white/[0.06]
          bg-[#0b0713]/95
          shadow-[0_30px_120px_rgba(0,0,0,0.72)]
          backdrop-blur-2xl

          before:absolute
          before:inset-0
          before:bg-[radial-gradient(circle_at_top,rgba(125,56,255,0.12),transparent_42%)]
          before:pointer-events-none

          after:absolute
          after:inset-0
          after:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25))]
          after:pointer-events-none
        "
        initial={{
          opacity: 0,
          y: 32,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* glow line */}
        <motion.div
          aria-hidden
          className="
            absolute
            left-[-20%]
            top-0
            h-px
            w-[140%]
            bg-gradient-to-r
            from-transparent
            via-[#f5d67d]/50
            to-transparent
          "
          animate={{
            x: ["-10%", "10%", "-10%"],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* close */}
        <button
          type="button"
          aria-label="Fechar modal"
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-40
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.05]
            bg-black/40
            text-white/70
            backdrop-blur-xl
            transition-all
            duration-300

            hover:rotate-90
            hover:bg-white/[0.06]
            hover:text-white
          "
        >
          <X className="h-5 w-5" />
        </button>

        {/* top tabs */}
        {showNav && (
          <div
            className="
              relative
              z-20
              flex
              flex-wrap
              gap-2
              border-b
              border-white/[0.05]
              p-5
              sm:p-6
            "
          >
            {profiles.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={[
                  `
                    rounded-full
                    px-4
                    py-2
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    transition-all
                    duration-300
                  `,
                  activeIndex === index
                    ? `
                      bg-[#f5d67d]
                      text-[#230b33]
                      shadow-[0_8px_30px_rgba(245,214,125,0.35)]
                    `
                    : `
                      border
                      border-white/[0.06]
                      bg-white/[0.03]
                      text-white/60
                      hover:bg-white/[0.06]
                    `,
                ].join(" ")}
              >
                {item.profileName}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={profile.id}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              z-10
              grid
              gap-0

              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
            {/* image side */}
            <div
              className="
                relative
                overflow-hidden
                bg-[#080d13]
                p-5

                sm:p-6
                lg:p-8
              "
            >
              {/* floating glow */}
              <motion.div
                aria-hidden
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#7d38ff]/10
                  blur-[100px]
                "
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                whileHover={{
                  rotate: 0,
                  scale: 1,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/[0.06]
                  bg-[#0b0811]
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  rotate-[1deg]
                  scale-[0.985]
                  transition-all
                  duration-500
                "
              >
                {/* top bar */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.06]
                    px-5
                    py-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-[#f5d67d]" />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/50
                      "
                    >
                      Preview real
                    </span>
                  </div>

                  <span className="text-[10px] text-white/35">
                    {profile.handle}
                  </span>
                </div>

                {/* light sweep */}
                <motion.div
                  aria-hidden
                  className="
                    absolute
                    inset-y-0
                    left-[-40%]
                    w-[30%]
                    rotate-12
                    bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.08),transparent)]
                  "
                  animate={{
                    left: ["-40%", "120%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear",
                  }}
                />

                <Image
                  src={profile.profilePreviewImage}
                  alt={profile.profilePreviewAlt}
                  width={900}
                  height={640}
                  className="
                    h-auto
                    w-full
                    object-contain
                  "
                />
              </motion.div>
            </div>

            {/* content side */}
            <div className="relative p-6 sm:p-8 lg:p-10">
              {/* arrows */}
              {showNav && (
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={prevProfile}
                    className="
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-white/60
                      backdrop-blur-xl
                      transition-all

                      hover:bg-white/[0.07]
                    "
                  >
                    ←
                  </button>

                  <button
                    onClick={nextProfile}
                    className="
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-white/60
                      backdrop-blur-xl
                      transition-all

                      hover:bg-white/[0.07]
                    "
                  >
                    →
                  </button>
                </div>
              )}

              {/* label */}
              <span
                className="
                  mt-8
                  inline-block
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#f5d67d]
                "
              >
                {profile.category}
              </span>

              {/* title */}
              <h2
                className="
                  mt-3
                  text-4xl
                  font-black
                  leading-[1]
                  text-white

                  sm:text-5xl
                "
              >
                {profile.profileName}
              </h2>

              <p className="mt-2 text-sm font-medium text-white/40">
                {profile.handle}
              </p>

              <p
                className="
                  mt-6
                  text-sm
                  leading-relaxed
                  text-white/70

                  sm:text-base
                "
              >
                {profile.subtitle}
              </p>

              {/* metrics */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  "+230% alcance",
                  "3x retenção",
                  "+autoridade",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.05]
                      bg-white/[0.03]
                      p-4
                      text-center
                      backdrop-blur-xl
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-[#f5d67d]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="my-8 h-px bg-white/[0.06]" />

              {/* storytelling */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Objetivo
                  </span>

                  <p className="mt-2 text-white/80">
                    Fortalecer percepção profissional e criar presença digital
                    mais sólida.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Estratégia
                  </span>

                  <p className="mt-2 text-white/80">
                    Direção visual, posicionamento e conteúdo com foco em
                    retenção e autoridade.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Resultado
                  </span>

                  <p className="mt-2 text-white/80">
                    Marca mais consistente, clara e preparada para gerar mais
                    percepção de valor.
                  </p>
                </div>
              </div>

              <div className="my-8 h-px bg-white/[0.06]" />

              {/* points */}
              <ul className="grid gap-3">
                {profile.points.map((point) => (
                  <li
                    key={point}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      text-white/75

                      sm:text-base
                    "
                  >
                    <span
                      className="
                        mt-0.5
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#f5d67d]/12
                        text-[#f5d67d]
                      "
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-10
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#f7da83]
                  via-[#f5c95a]
                  to-[#e8a63d]
                  px-6
                  py-4
                  text-sm
                  font-black
                  uppercase
                  tracking-tight
                  text-[#230b33]
                  shadow-[0_14px_40px_rgba(245,201,90,0.28)]
                  transition-all
                  duration-300

                  hover:scale-[1.01]
                  hover:brightness-105

                  sm:w-auto
                  sm:px-8
                "
              >
                Abrir perfil real

                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SHARED — GOLD BUTTON
═══════════════════════════════════════════════════════════════ */

function GoldButton({
  href,
  children,
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex w-full sm:w-auto"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-[#f5d67d]/20 bg-gradient-to-r from-[#f7da83] via-[#f5c95a] to-[#e8a63d] font-black text-[#240b36] shadow-[0_14px_34px_rgba(245,201,90,0.28)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(245,201,90,0.42)]",
          large
            ? "px-8 py-4 text-base uppercase tracking-tight sm:px-12 sm:py-5 sm:text-lg"
            : "px-6 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base",
        ].join(" ")}
      >
        <span className="relative z-10">{children}</span>

        {/* shimmer */}
        <motion.span
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(120deg,transparent_10%,rgba(255,255,255,0.45)_50%,transparent_90%)]"
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.8, ease: "linear" }}
        />
      </Link>
    </motion.div>
  );
}
