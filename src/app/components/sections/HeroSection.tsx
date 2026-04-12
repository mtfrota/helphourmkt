"use client";

import bgAnimation from "@/animations/fundo.json";
import { heroContent } from "@/app/content/home";
import { useLottieIntersection } from "@/lib/useLottieIntersection";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import SectionBadge from "../ui/SectionBadge";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function HeroSection() {
  const { containerRef, lottieRef } = useLottieIntersection(0.2);

  return (
    <section id="hero" className="scroll-mt-36 md:scroll-mt-28">
      <div ref={containerRef} className="relative overflow-hidden border-b border-brand/40 bg-[#4b1772]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.09),transparent_40%)]" />

        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-100">
          <div className="h-[150%] w-[150%] md:h-[160%] md:w-[160%]">
            <Lottie
              lottieRef={lottieRef}
              animationData={bgAnimation}
              loop
              autoplay={false}
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 md:items-center md:py-20">
          <Reveal>
            <div className="text-center lg:text-left">
              <SectionBadge className="mx-auto text-[var(--accent)] lg:mx-0">{heroContent.badge}</SectionBadge>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
                <span className="hero-line-a block text-brand">{heroContent.titleStart}</span>
                <span className="hero-line-b block text-[var(--accent)]">{heroContent.titleHighlight}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text)]/90 sm:text-lg lg:mx-0">
                {heroContent.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href={heroContent.primaryCtaHref}
                  className="btn-pop mx-auto w-full rounded-full border border-[var(--text)] bg-[var(--text)] px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#370f49] sm:mx-0 sm:w-auto"
                >
                  {heroContent.primaryCtaLabel}
                </Link>
                <WhatsAppButton className="btn-pop mx-auto w-full rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#370f49] sm:mx-0 sm:w-auto">
                  {heroContent.secondaryCtaLabel}
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="relative mx-auto w-full max-w-[760px]">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent)]/20 blur-xl" />
              <div className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-white/10 blur-xl" />
              <div className="glass-effect relative h-[320px] w-full overflow-hidden rounded-[2.25rem] sm:h-[420px] sm:rounded-[3rem] md:h-[580px]">
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
  );
}
