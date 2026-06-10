"use client";

import { processContent, processSteps } from "@/app/content/home";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import Reveal from "../ui/Reveal";

export default function ProcessSection() {
  return (
    <section
      id="processo"
      className="
        relative
        isolate
        overflow-hidden
        scroll-mt-36
        bg-[#07010F]
        py-28
        text-white
        md:scroll-mt-28
      "
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-10%]
            top-[-10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-fuchsia-500/20
            blur-3xl
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            right-[-10%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-violet-500/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
        />
      </div>

      {/* Grid texture */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <Reveal className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2
              backdrop-blur-xl
            "
          >
            <Rocket
              size={15}
              className="text-[#d8b4fe]"
              strokeWidth={2.3}
            />

            <span
              className="
                text-sm
                font-medium
                tracking-wide
                text-white/80
              "
            >
              {processContent.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              mt-8
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              md:text-6xl
            "
          >
            {processContent.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-white/65
              md:text-xl
            "
          >
            {processContent.description}
          </motion.p>
        </div>

        {/* PROCESS GRID */}
        <div
          className="
            relative
            mt-20
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {/* Connection line */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-14
              hidden
              h-px
              w-[80%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-fuchsia-400/40
              to-transparent
              xl:block
            "
          />

          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                text-center
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-fuchsia-400/30
                hover:bg-white/[0.05]
                hover:shadow-[0_0_60px_rgba(168,85,247,0.18)]
                xl:text-left
              "
            >
              {/* Glow hover */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-40
                    w-40
                    -translate-x-1/2
                    rounded-full
                    bg-fuchsia-500/20
                    blur-3xl
                  "
                />
              </div>

              {/* Top line */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-fuchsia-400/60
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* STEP NUMBER */}
              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  text-2xl
                  font-black
                  text-[#d8b4fe]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
                  xl:mx-0
                "
              >
                0{index + 1}
              </div>

              {/* CONTENT */}
              <div className="relative mt-8">
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-base
                    leading-relaxed
                    text-white/65
                  "
                >
                  {step.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}