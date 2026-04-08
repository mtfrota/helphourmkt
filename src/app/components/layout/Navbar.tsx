"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Lottie from "lottie-react";
import sendAnimation from "src/animations/send.json";
import animationData from "src/animations/waveanimation.json";

const WHATSAPP_URL = "https://wa.me/5585990000000";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "/helphour/servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Vídeos", href: "#videos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const lottieRef = useRef<any>(null);

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
    }, 5000); // tempo total (animação + pausa)
  };

  playLoop();

  return () => clearTimeout(timeout);
}, []);


  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl shadow-md py-2"
          : "bg-white/10 backdrop-blur-xl py-5"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4">
        {/* LOGO */}
        <Link href="#hero" className="relative flex items-center px-4 py-2">
      
            {/* 🔵 ANIMAÇÃO (FUNDO) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={`transition-all duration-300 ${
                  scrolled ? "w-20 h-20" : "w-40 h-40"
                }`}
              >
                <Lottie animationData={animationData} loop autoplay />
              </div>
            </div>

            {/* ⚪ LOGO (FRENTE) */}
            <Image
              src="/logo.svg"
              alt="Help Hour MKT"
              width={200}
              height={80}
              priority
              className={`relative z-10 transition-all duration-300 origin-left ${
                scrolled ? "h-12" : "h-28"
              } w-auto`}
            />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex gap-6 text-[14px] font-medium text-white">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative group inline-block transition-all duration-300 hover:scale-110"
              >
                <span className="relative z-10 [text-shadow:1px_1px_0_#000,-1px_1px_0_#000,1px_-1px_0_#000,-1px_-1px_0_#000]">
                  {link.label}
                </span>

                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#e0b845] transition-all duration-300 group-hover:w-full" />

                <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-[#e0b845]/10 blur-md transition" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA DESKTOP */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setPlay(true)}
          onMouseLeave={() => setPlay(false)}
          className=" group hidden lg:inline-flex items-center gap-2 bg-[#e0b845] text-[#2b0f40] px-5 py-2 rounded-full font-bold text-sm shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <span>Fale conosco</span>

          <div className="w-6 h-6">
            <Lottie
              lottieRef={lottieRef}
              animationData={sendAnimation}
              loop={false}
            />
          </div>
        </a>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden bg-[#2b0f40]/80 backdrop-blur-md p-2 rounded-full shadow-lg border border-white/20"
        >
          {mobileOpen ? <X color="#fff" /> : <Menu color="#fff" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full inset-x-0 bg-[#2b0f40]/95 backdrop-blur-xl z-50 p-5 rounded-b-2xl shadow-2xl"
            >
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-3 rounded-lg bg-white/10 text-white font-medium transition-all duration-300 hover:bg-[#e0b845] hover:text-[#2b0f40] hover:scale-[1.03]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA MOBILE */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onTouchStart={() => setPlay(true)}
                className="mt-5 flex items-center justify-center gap-2 bg-[#e0b845] text-[#2b0f40] py-3 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 active:scale-95"
              >
                <span>Fale conosco</span>

                <div className="w-6 h-6">
                  <Lottie
                    key={play ? "play-mobile" : "stop-mobile"}
                    animationData={sendAnimation}
                    loop={false}
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