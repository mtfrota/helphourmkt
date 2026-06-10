"use client";

import { services, type ServiceIconName } from "@/app/content/home";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Camera,
  CheckCircle2,
  Globe2,
  MessageSquare,
  Rocket,
  Video as VideoIcon,
} from "lucide-react";
import Link from "next/link";
import { type ComponentType } from "react";
import Reveal from "../ui/Reveal";

const iconMap: Record<
  ServiceIconName,
  ComponentType<{ size?: number; strokeWidth?: number }>
> = {
  MessageSquare,
  Video: VideoIcon,
  Camera,
  CalendarDays,
  Globe2,
  BarChart3,
};

export default function ServicesSection() {
  return (
    <section
      id="servicos"
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
            h-105
            w-105
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
            h-95
            w-95
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
            h-125
            w-125
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
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-size-[70px_70px]
        "
      />

      <Reveal className="mx-auto w-full max-w-7xl px-4 sm:px-6">
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
              bg-white/3
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
              Experiências digitais que deixam marcas
            </span>
          </motion.div>

          {/* Headline */}
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
            O digital ficou barulhento.
            <br />

            <span
              className="
                bg-linear-to-r
                from-[#ffffff]
                via-[#d8b4fe]
                to-[#a855f7]
                bg-clip-text
                text-transparent
              "
            >
              Sua marca precisa ser inesquecível.
            </span>
          </motion.h2>

          {/* Subheadline */}
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
            Estratégia, identidade e performance para empresas que
            querem dominar o digital com presença de verdade.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                key={service.title}
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
                  bg-white/3
                  p-8
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-fuchsia-400/30
                  hover:bg-white/5
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.18)]
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
                    bg-linear-to-r
                    from-transparent
                    via-fuchsia-400/60
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    text-[#d8b4fe]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
                  "
                >
                  <Icon size={26} strokeWidth={2.3} />
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
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-base
                      leading-relaxed
                      text-white/65
                    "
                  >
                    {service.text}
                  </p>
                </div>

                {/* LIST */}
                <ul
                  className="
                    relative
                    mt-8
                    space-y-4
                    text-sm
                    text-white/75
                  "
                  role="list"
                >
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="
                          mt-0.5
                          h-5
                          w-5
                          shrink-0
                          text-fuchsia-300
                        "
                        strokeWidth={2.4}
                      />

                      <span className="leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <Link
                  href="/helphour/portfolio"
                  className="
                    group/button
                    relative
                    mt-10
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/4
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    tracking-wide
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-fuchsia-400/30
                    hover:bg-white/8
                  "
                >
                  <span className="relative z-10">
                    Explorar serviço
                  </span>

                  <ArrowRight
                    size={18}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                    "
                  />

                  {/* button glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover/button:opacity-100
                    "
                  >
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-24
                        w-24
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-fuchsia-500/20
                        blur-2xl
                      "
                    />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}