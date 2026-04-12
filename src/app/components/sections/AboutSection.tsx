"use client";

import arrowDown from "@/animations/down_arrow.json";
import bgAnimation from "@/animations/fundo.json";
import { aboutContent, aboutHighlights } from "@/app/content/home";
import { useLottieIntersection } from "@/lib/useLottieIntersection";
import Lottie from "lottie-react";
import { motion } from "framer-motion"; // Adicionado para animações refinadas
import Image from "next/image";
import Reveal from "../ui/Reveal";
import SectionBadge from "../ui/SectionBadge";

export default function AboutSection() {
  const { containerRef, lottieRef } = useLottieIntersection(0.2);

  return (
    <section
      id="sobre"
      className="relative scroll-mt-36 overflow-hidden bg-[#f8f9ff] py-20 text-[#0f1120] md:scroll-mt-28 lg:py-32"
    >
      {/* FUNDO MANTIDO: Animação Lottie com ajuste de blend-mode */}
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-40 mix-blend-multiply"
      >
        <div className="h-[120%] w-[120%] md:h-[130%] md:w-[130%]">
          <Lottie
            lottieRef={lottieRef}
            animationData={bgAnimation}
            loop
            autoplay={false}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
      </div>

      {/* Seta de scroll com animação de flutuação */}
      <div className="relative z-10 mb-12 flex justify-center">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lottie animationData={arrowDown} loop className="h-16 w-16 opacity-40" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1fr] md:items-center">
        
        {/* LADO ESQUERDO: IMAGEM COM EFEITO PREMIUM */}
        <Reveal>
          <div className="relative">
            {/* Orbes decorativas aprimoradas */}
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent)]/30 blur-[80px]" />
            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[#4c1276]/20 blur-[80px]" />
            
            <div className="glass-effect relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/20 shadow-2xl backdrop-blur-md">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/sobre-nos.svg"
                  alt="Equipe Help Hour"
                  width={900}
                  height={1100}
                  className="relative z-10 h-full w-full object-contain p-4 drop-shadow-2xl transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* LADO DIREITO: TEXTO E HIGHLIGHTS */}
        <Reveal delayMs={150}>
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionBadge className="bg-[#4c1276]/10 text-[#4c1276] border-[#4c1276]/20">
                {aboutContent.badge}
              </SectionBadge>
              
              <h2 className="text-3xl font-black leading-[1.15] text-[#0c023c] sm:text-4xl lg:text-5xl">
                {aboutContent.title.split(' ').map((word, i) => 
                  word.toLowerCase() === 'help' || word.toLowerCase() === 'hour' 
                  ? <span key={i} className="text-[#4c1276]"> {word} </span> 
                  : word + ' '
                )}
              </h2>

              <div className="space-y-4">
                {aboutContent.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed text-[#2b2e3f]/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* HIGHLIGHTS: Cards menores e mais impactantes */}
            <div className="grid grid-cols-2 gap-4">
              {aboutHighlights.map((item) => (
                <motion.article
                  key={item.title}
                  whileHover={{ scale: 1.03 }}
                  className="group rounded-3xl border border-white/60 bg-white/50 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md transition-all hover:bg-white hover:shadow-[#4c1276]/10"
                >
                  <p className="text-xl font-black text-[#4c1276] md:text-2xl">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#2b2e3f]/60 group-hover:text-[#2b2e3f]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
