"use client"

import { motion } from "framer-motion"

const loadingSteps = [
  "Analisando presença digital...",
  "Lendo posicionamento da marca...",
  "Calculando potencial de crescimento...",
  "Identificando oportunidades...",
  "Gerando estratégia personalizada...",
]

export default function LoadingAnalysis() {
  return (
    <div
      className="
        flex
        min-h-162.5
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      {/* GLOW */}
      <div className="relative mb-14">
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-violet-500/30
            blur-3xl
          "
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="
            relative
            h-32
            w-32
            rounded-full
            border
            border-violet-500/20
          "
        >
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="
              absolute
              inset-4
              rounded-full
              border
              border-fuchsia-500/20
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                h-5
                w-5
                rounded-full
                bg-linear-to-r
                from-violet-400
                to-fuchsia-400
              "
            />
          </motion.div>
        </motion.div>
      </div>

      {/* TITLE */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          mb-4
          text-4xl
          font-semibold
          text-white
          md:text-5xl
        "
      >
        Analisando sua marca
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.1,
        }}
        className="
          mb-14
          max-w-xl
          text-lg
          leading-relaxed
          text-white/50
        "
      >
        Nossa inteligência estratégica está
        avaliando o posicionamento da sua
        presença digital.
      </motion.p>

      {/* LOADING STEPS */}
      <div className="space-y-4">
        {loadingSteps.map((step, index) => (
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.5,
            }}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/5
              bg-white/3
              px-6
              py-4
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: index * 0.2,
              }}
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-violet-400
              "
            />

            <span className="text-white/70">
              {step}
            </span>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM TEXT */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        className="
          mt-14
          text-sm
          tracking-wide
          text-white/30
        "
      >
        Help Hour Intelligence Engine
      </motion.p>
    </div>
  )
}