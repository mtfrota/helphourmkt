"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* TOP GLOW */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-30
          -top-30
          h-80
          w-[320px]
          rounded-full
          bg-violet-600/20
          blur-3xl
        "
      />

      {/* BOTTOM GLOW */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-35
          -right-25
          h-90
          w-90
          rounded-full
          bg-fuchsia-600/20
          blur-3xl
        "
      />

      {/* CENTER LIGHT */}
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
          bg-violet-500/5
          blur-3xl
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* PARTICLES */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + index * 0.3,
              delay: index * 0.2,
            }}
            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-white/40
            "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  )
}