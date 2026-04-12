"use client";

import { processContent, processSteps } from "@/app/content/home";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionBadge from "../ui/SectionBadge";

export default function ProcessSection() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden scroll-mt-36 bg-gradient-to-br from-[#4b1772] via-[#5f2391] to-[#4b1772] py-20 text-[var(--text)] md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.14),transparent_42%)] opacity-25" />

      <Reveal className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        <SectionBadge className="text-[var(--accent)]">{processContent.badge}</SectionBadge>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{processContent.title}</h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-white/85 sm:text-lg">{processContent.description}</p>

        <div className="pointer-events-none absolute left-1/2 top-[56%] hidden h-[2px] w-[80%] -translate-x-1/2 bg-white/10 md:block">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/70 to-transparent">
            <div className="animate-line h-full w-full bg-[linear-gradient(90deg,transparent_0%,#e0b845_20%,#e0b845_50%,transparent_80%)] opacity-60" />
          </div>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-[18px] border border-white/28 bg-white/8 p-6 text-center shadow-[0_14px_36px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-white/45 hover:shadow-[0_18px_46px_rgba(0,0,0,0.32)] md:text-left"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition duration-400 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[18px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />
              </div>

              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/18 text-lg font-bold text-white transition duration-300 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[#2b0f40] md:mx-0">
                {index + 1}
              </div>

              <h3 className="font-display text-xl font-extrabold uppercase text-[var(--accent)] transition duration-300 group-hover:translate-x-1">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85 transition duration-300 group-hover:text-white">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <style jsx>{`
        @keyframes lineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-line {
          transform-origin: left;
          animation: lineGrow 1.2s ease forwards;
        }
      `}</style>
    </section>
  );
}
