"use client";

import animationData from "@/animations/waveanimation.json";
import sendAnimation from "@/animations/send.json";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5585990000000";

const links = [
  { label: "Início", href: "/helphour/#hero" },
  { label: "Sobre", href: "/helphour/#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "/helphour/#processo" },
  { label: "Portfólio", href: "/helphour/portfolio" },
  { label: "Contato", href: "/helphour/#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const playLoop = () => {
      if (!lottieRef.current) return;

      lottieRef.current.stop();
      lottieRef.current.play();

      timeout = setTimeout(() => {
        playLoop();
      }, 5000);
    };

    playLoop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/20 py-2 shadow-md backdrop-blur-xl" : "bg-white/10 py-3 sm:py-4 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/helphour/#hero" className="relative flex items-center py-1 pr-2">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className={`transition-all duration-300 ${scrolled ? "h-16 w-16 sm:h-20 sm:w-20" : "h-24 w-24 sm:h-32 sm:w-32"}`}>
              <Lottie animationData={animationData} loop autoplay />
            </div>
          </div>

          <Image
            src="/logo.svg"
            alt="Help Hour MKT"
            width={200}
            height={80}
            priority
            className={`relative z-10 w-auto origin-left transition-all duration-300 ${scrolled ? "h-10 sm:h-12" : "h-14 sm:h-20"}`}
          />
        </Link>

        <ul
          className={`hidden gap-8 text-[18px] font-medium leading-[28px] transition-colors duration-300 lg:flex ${
            scrolled ? "text-[#2b0f40]" : "text-white"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="group relative inline-flex items-center py-1">
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    scrolled ? "text-[#2b0f40]" : "text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.6)]"
                  } group-hover:text-[#e0b845]`}
                >
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#e0b845] transition-all duration-500 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setPlay(true)}
          onMouseLeave={() => setPlay(false)}
          className="group hidden items-center gap-2 rounded-full bg-[#e0b845] px-5 py-2 text-sm font-bold text-[#2b0f40] shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg lg:inline-flex"
        >
          <span>Fale conosco</span>
          <div className="h-6 w-6">
            <Lottie lottieRef={lottieRef} animationData={sendAnimation} loop={false} />
          </div>
        </a>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#2b0f40]/70 backdrop-blur-md transition-all duration-300 active:scale-95 lg:hidden"
        >
          <span className="text-white transition-transform duration-300">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</span>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-x-0 top-full z-50 rounded-b-2xl border-t border-white/10 bg-[#2b0f40]/95 px-4 py-6 shadow-xl backdrop-blur-xl sm:px-6"
            >
              <ul className="mx-auto flex w-full max-w-6xl flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-white transition-all duration-300 active:scale-[0.98]"
                    >
                      <span className="transition-colors duration-300 group-hover:text-[#e0b845]">{link.label}</span>
                      <span className="h-2 w-2 rounded-full bg-[#e0b845] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onTouchStart={() => setPlay(true)}
                className="mx-auto mt-6 flex w-full max-w-6xl items-center justify-center gap-2 rounded-xl bg-[#e0b845] py-3 text-base font-semibold text-[#2b0f40] transition-all duration-300 active:scale-95"
              >
                <span>Fale conosco</span>
                <div className="h-5 w-5">
                  <Lottie key={play ? "play-mobile" : "stop-mobile"} animationData={sendAnimation} loop={false} />
                </div>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
