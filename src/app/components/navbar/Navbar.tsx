"use client";

import animationData from "@/animations/waveanimation.json";
import sendAnimation from "@/animations/send.json";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useId,
  useMemo,
} from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────────────────────────── */
const WHATSAPP_URL = "https://wa.me/5585990000000";
const BASE = "/helphour";

const links = [
  { label: "Início",    href: `${BASE}/`,          hash: "hero"     },
  { label: "Sobre",     href: `${BASE}/`,          hash: "sobre"    },
  { label: "Serviços",  href: `${BASE}/`,          hash: "servicos" },
  { label: "Processo",  href: `${BASE}/`,          hash: "processo" },
  { label: "Portfólio", href: `${BASE}/portfolio`, hash: null       },
  { label: "Contato",   href: `${BASE}/`,          hash: "contato"  },
] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   Hook: active section via IntersectionObserver
───────────────────────────────────────────────────────────────────────────── */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.35, rootMargin: "-60px 0px -35% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const lottieWaveRef = useRef<LottieRefCurrentProps | null>(null);
  const lottieSendRef = useRef<LottieRefCurrentProps | null>(null);
  const headerRef     = useRef<HTMLElement | null>(null);
  const firstLinkRef  = useRef<HTMLAnchorElement | null>(null);
  const waveTimer     = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuId  = useId();
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  // Section IDs for IntersectionObserver (only on homepage)
  const sectionIds = useMemo(
    () => links.flatMap((l) => (l.hash ? [l.hash] : [])),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  /* ── Determine if a link is "active" ─────────────────────────────────────── */
  const isActive = useCallback(
    (link: (typeof links)[number]) => {
      const cleanPath = pathname?.replace(/\/$/, "") ?? "";
      const cleanHref = link.href.replace(/\/$/, "");

      // Portfolio page — exact pathname match
      if (!link.hash) return cleanPath === cleanHref;

      // Home hash links — match active section from observer, or pathname on load
      const isHomePath =
        cleanPath === cleanHref || cleanPath === BASE || cleanPath === "";
      if (!isHomePath) return false;

      return activeSection === link.hash;
    },
    [pathname, activeSection]
  );

  /* ── Scroll listener ──────────────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body scroll-lock while mobile menu open ──────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Focus trap + Esc to close ────────────────────────────────────────────── */
  useEffect(() => {
    if (!mobileOpen) return;

    // rAF to let the drawer render before focusing
    const raf = requestAnimationFrame(() => firstLinkRef.current?.focus());

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (e.key === "Tab" && headerRef.current) {
        const focusable = Array.from(
          headerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => {
          // Exclude hidden desktop elements from trap
          const style = window.getComputedStyle(el);
          return style.display !== "none" && style.visibility !== "hidden";
        });

        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  /* ── Wave Lottie: loop while header visible, respect reduced-motion ───────── */
  useEffect(() => {
    if (prefersReduced) return;

    const header = headerRef.current;
    if (!header) return;

    const scheduleNext = () => {
      waveTimer.current = setTimeout(() => {
        lottieWaveRef.current?.stop();
        lottieWaveRef.current?.play();
        scheduleNext();
      }, 5000);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottieWaveRef.current?.stop();
          lottieWaveRef.current?.play();
          scheduleNext();
        } else {
          if (waveTimer.current) clearTimeout(waveTimer.current);
          lottieWaveRef.current?.stop();
        }
      },
      { threshold: 0 }
    );

    observer.observe(header);

    return () => {
      if (waveTimer.current) clearTimeout(waveTimer.current);
      observer.disconnect();
    };
  }, [prefersReduced]);

  /* ── CTA send animation ───────────────────────────────────────────────────── */
  useEffect(() => {
    if (!lottieSendRef.current) return;
    if (ctaHovered && !prefersReduced) {
      lottieSendRef.current.stop();
      lottieSendRef.current.play();
    } else {
      lottieSendRef.current.stop();
    }
  }, [ctaHovered, prefersReduced]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  /* ─────────────────────────────────────────────────────────────────────────
     Render
  ───────────────────────────────────────────────────────────────────────── */
  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/15 py-2 shadow-lg shadow-black/10 backdrop-blur-2xl"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      {/* Subtle top accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e0b845]/60 to-transparent"
      />

      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Navegação principal"
      >
        {/* ── Logo ──────────────────────────────────────────────────────────── */}
        <Link
          href={`${BASE}/#hero`}
          aria-label="Help Hour MKT — ir para o início"
          className="relative flex items-center gap-0 py-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b845] focus-visible:ring-offset-2"
        >
          <div className="relative flex-shrink-0">
            {/* Wave Lottie — centered over logo mark */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                scrolled
                  ? "h-16 w-16 sm:h-20 sm:w-20"
                  : "h-24 w-24 sm:h-32 sm:w-32"
              }`}
            >
              <Lottie
                lottieRef={lottieWaveRef}
                animationData={animationData}
                loop={false}
                autoplay={false}
              />
            </div>

            <Image
              src="/logo.svg"
              alt="Help Hour MKT"
              width={200}
              height={80}
              priority
              className={`relative z-10 w-auto origin-left transition-all duration-300 ${
                scrolled ? "h-10 sm:h-12" : "h-14 sm:h-20"
              }`}
            />
          </div>
        </Link>

        {/* ── Desktop nav links ─────────────────────────────────────────────── */}
        <ul
          className="hidden items-center gap-1 lg:flex"
          role="list"
          aria-label="Links de navegação"
        >
          {links.map((link) => {
            const href    = link.hash ? `${link.href}#${link.hash}` : link.href;
            const active  = isActive(link);
            const hovered = hoveredLink === href;
            const lit     = active || hovered;

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHoveredLink(href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative inline-flex flex-col items-center px-3 py-2 text-[15px] font-semibold tracking-wide rounded-lg
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b845] focus-visible:ring-offset-2
                             transition-colors duration-200 group"
                >
                  {/* Pill highlight background */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      active
                        ? "bg-[#e0b845]/15"
                        : hovered
                        ? "bg-white/10"
                        : "bg-transparent"
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      lit
                        ? "text-[#e0b845]"
                        : scrolled
                        ? "text-[#2b0f40]"
                        : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Animated underline */}
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mt-0.5 block h-[2px] rounded-full bg-[#e0b845] transition-all duration-300 ease-out ${
                      lit ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA desktop ───────────────────────────────────────────────────── */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          className="hidden lg:inline-flex items-center gap-2 rounded-full
                     bg-[#e0b845] px-5 py-2.5 text-sm font-bold text-[#2b0f40]
                     shadow-md shadow-[#e0b845]/30
                     ring-1 ring-[#e0b845]/50
                     transition-all duration-300
                     hover:scale-105 hover:shadow-lg hover:shadow-[#e0b845]/40 hover:bg-[#f0ca55]
                     active:scale-[0.98]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b0f40] focus-visible:ring-offset-2"
        >
          <span>Fale conosco</span>
          <div className="h-5 w-5 flex-shrink-0" aria-hidden="true">
            <Lottie
              lottieRef={lottieSendRef}
              animationData={sendAnimation}
              loop={false}
              autoplay={false}
            />
          </div>
        </a>

        {/* ── Hamburger button ──────────────────────────────────────────────── */}
        <button
          type="button"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          className="flex h-11 w-11 items-center justify-center rounded-full
                     border border-white/20 bg-[#2b0f40]/80 backdrop-blur-md
                     text-white shadow-md
                     transition-all duration-300 active:scale-95
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b845]
                     lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-x-0 top-full z-50
                         max-h-[calc(100svh-5rem)] overflow-y-auto
                         rounded-b-2xl border-t border-white/10
                         bg-[#2b0f40]/95 px-4 py-5 shadow-2xl backdrop-blur-xl
                         sm:px-6"
            >
              <ul
                className="mx-auto flex w-full max-w-6xl flex-col gap-1"
                role="list"
              >
                {links.map((link, i) => {
                  const href   = link.hash ? `${link.href}#${link.hash}` : link.href;
                  const active = isActive(link);

                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        ref={i === 0 ? firstLinkRef : undefined}
                        onClick={closeMobile}
                        aria-current={active ? "page" : undefined}
                        className={`group flex items-center justify-between rounded-xl px-4 py-3
                                    text-base font-semibold
                                    transition-all duration-200 active:scale-[0.98]
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b845]
                                    ${
                                      active
                                        ? "text-[#e0b845] bg-white/8"
                                        : "text-white/90 hover:text-[#e0b845] hover:bg-white/8"
                                    }`}
                      >
                        <span>{link.label}</span>

                        {/* Active/hover dot */}
                        <span
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 rounded-full bg-[#e0b845]
                                      transition-all duration-300
                                      ${
                                        active
                                          ? "opacity-100 scale-100"
                                          : "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
                                      }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Divider */}
              <div className="mx-auto mt-4 mb-4 w-full max-w-6xl border-t border-white/10" />

              {/* CTA mobile */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onPointerEnter={() => setCtaHovered(true)}
                onPointerLeave={() => setCtaHovered(false)}
                className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2
                           rounded-xl bg-[#e0b845] py-3.5
                           text-base font-bold text-[#2b0f40]
                           shadow-md shadow-[#e0b845]/30
                           transition-all duration-300
                           active:scale-[0.97] active:bg-[#f0ca55]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Fale conosco no WhatsApp</span>
                <div className="h-5 w-5 flex-shrink-0" aria-hidden="true">
                  <Lottie
                    animationData={sendAnimation}
                    loop={false}
                    autoplay={ctaHovered && !prefersReduced}
                  />
                </div>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}