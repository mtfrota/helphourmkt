"use client";

import { portfolioContent, portfolioItems } from "@/app/content/home";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "../ui/Reveal";
import SectionBadge from "../ui/SectionBadge";

export default function PortfolioSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>("[data-slide]");
    const card = cards[index];
    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const children = Array.from(slider.children);
      const center = slider.scrollLeft + slider.offsetWidth / 2;

      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      children.forEach((child, index) => {
        const element = child as HTMLElement;
        const elementCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(center - elementCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isPaused) return;

    const computed = getComputedStyle(slider);
    const gap = Number.parseFloat(computed.columnGap || computed.gap || "20");

    const tick = () => {
      const first = slider.querySelector<HTMLElement>("[data-slide]");
      const step = first ? first.getBoundingClientRect().width + gap : slider.clientWidth * 0.82;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const next = slider.scrollLeft + step;
      slider.scrollTo({ left: next >= maxScroll - 4 ? 0 : next, behavior: "smooth" });
    };

    const intervalId = window.setInterval(tick, 4200);
    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const scrollByCard = (direction: 1 | -1) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const first = slider.querySelector<HTMLElement>("[data-slide]");
    if (!first) return;

    const computed = getComputedStyle(slider);
    const gap = Number.parseFloat(computed.columnGap || computed.gap || "20");

    slider.scrollBy({
      left: direction * (first.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden scroll-mt-36 bg-gradient-to-br from-[#120024] via-[#240447] to-[#1a0335] py-16 text-white md:scroll-mt-28"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 35%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1), transparent 35%), linear-gradient(120deg, rgba(224,184,69,0.08), transparent 30%, rgba(255,255,255,0.04) 65%, transparent 100%)",
          backgroundSize: "160% 160%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 50%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#8b5cf6]/25 blur-[110px]"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-[#f472b6]/20 blur-[120px]"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Reveal className="relative mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <SectionBadge className="mx-auto text-[var(--accent)]">{portfolioContent.badge}</SectionBadge>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{portfolioContent.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-white/85 sm:text-lg">{portfolioContent.description}</p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#120024] via-[#120024cc] to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-[#1a0335] via-[#1a0335cc] to-transparent lg:block" />

          <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-between px-4 lg:flex">
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollByCard(-1)}
              className="pointer-events-auto rounded-full border border-white/15 bg-white/10 p-3 backdrop-blur-md transition hover:bg-white/20"
              aria-label="Anterior"
            >
              {"<"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollByCard(1)}
              className="pointer-events-auto rounded-full border border-white/15 bg-white/10 p-3 backdrop-blur-md transition hover:bg-white/20"
              aria-label="Próximo"
            >
              {">"}
            </motion.button>
          </div>

          <div
            ref={sliderRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scroll-smooth [scrollbar-gutter:stable] sm:gap-5 lg:gap-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {portfolioItems.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                animate={activeIndex === idx ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.74 }}
                data-slide
                className="relative min-w-[86%] snap-center overflow-hidden rounded-3xl transition-all duration-500 sm:min-w-[64%] lg:min-w-[42%] xl:min-w-[32%]"
              >
                <div className="glass-effect relative h-full overflow-hidden rounded-3xl border border-white/20 bg-white/[0.05] shadow-[0_22px_60px_rgba(139,92,246,0.24)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(247,216,123,0.16),transparent_32%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.08),transparent_34%)]" />

                  <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                    <motion.div className="absolute inset-0" whileHover={{ scale: 1.08 }} transition={{ duration: 0.45 }}>
                      <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="mt-4 space-y-3 p-5 text-center lg:text-left">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-extrabold uppercase text-[var(--accent)] drop-shadow">{item.title}</h3>
                      <span className="rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/15 px-3 py-1 text-xs font-bold text-[var(--accent)]">
                        {item.result}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-white/80">{item.metricLabel}</p>

                    <Link
                      href="/helphour/portfolio"
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md transition hover:border-[var(--accent)]/45 hover:bg-white/15 sm:w-auto"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            {portfolioItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                aria-label={`Ir para ${item.title}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollToCard(index)}
                className={`rounded-full transition-all ${
                  index === activeIndex ? "h-2.5 w-8 bg-[var(--accent)]" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/helphour/portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f7d87b] to-[#facc15] px-7 py-3 text-base font-bold uppercase tracking-wide text-[#2b0f40] shadow-[0_0_25px_rgba(247,216,123,0.5)] transition hover:scale-105 sm:w-auto"
            >
              Ver todos os projetos {"->"}
            </Link>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
