"use client"

import { motion } from "framer-motion"

import { Question } from "@/app/lib/brand-analyzer/types"
import { useBrandAnalyzerStore } from "@/app/store/brandAnalyzerStore"
import { useBrandAnalyzer } from "@/app/hooks/useBrandAnalyzer"

interface QuestionStepProps {
  question: Question
  currentStep: number
  totalSteps: number
}

export default function QuestionStep({
  question,
  currentStep,
  totalSteps,
}: QuestionStepProps) {
  const {
    answers,
    updateAnswer,
    prevStep,
  } = useBrandAnalyzerStore()

  const { handleNextStep } =
    useBrandAnalyzer()

  const currentValue =
    answers[question.id]

  const handleSelect = (value: string) => {
    updateAnswer(question.id, value)

    setTimeout(() => {
      handleNextStep(
        currentStep,
        totalSteps
      )
    }, 300)
  }

  const handleInputNext = () => {
    if (!currentValue) return

    handleNextStep(
      currentStep,
      totalSteps
    )
  }

  return (
    <motion.div
      key={question.id}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="flex min-h-162.5 flex-col"
    >
      {/* PROGRESS */}
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-white/40">
            Etapa {currentStep + 1} de {totalSteps}
          </span>

          <span className="text-sm text-violet-300">
            Help Hour Intelligence
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${
                ((currentStep + 1) /
                  totalSteps) *
                100
              }%`,
            }}
            className="
              h-full
              rounded-full
              bg-linear-to-r
              from-violet-500
              to-fuchsia-500
            "
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col justify-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="
            mb-4
            text-4xl
            font-semibold
            leading-tight
            text-white
            md:text-5xl
          "
        >
          {question.question}
        </motion.h2>

        {question.description && (
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.15,
            }}
            className="
              mb-10
              max-w-2xl
              text-lg
              leading-relaxed
              text-white/50
            "
          >
            {question.description}
          </motion.p>
        )}

        {/* SELECT */}
        {question.type === "select" && (
          <div className="grid gap-4 md:grid-cols-2">
            {question.options?.map((option) => {
              const active =
                currentValue === option.value

              return (
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  key={option.value}
                  onClick={() =>
                    handleSelect(option.value)
                  }
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          border-violet-400/50
                          bg-violet-500/10
                          shadow-[0_0_40px_rgba(168,85,247,0.2)]
                        `
                        : `
                          border-white/10
                          bg-white/3
                          hover:border-white/20
                          hover:bg-white/5
                        `
                    }
                  `}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-br
                      from-violet-500/10
                      to-fuchsia-500/5
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      text-lg
                      font-medium
                      text-white
                    "
                  >
                    {option.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        )}

        {/* INPUT */}
        {question.type === "input" && (
          <div className="max-w-2xl">
            <input
              type="text"
              value={currentValue}
              onChange={(e) =>
                updateAnswer(
                  question.id,
                  e.target.value
                )
              }
              placeholder={question.placeholder}
              className="
                mb-6
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/3
                px-6
                py-5
                text-lg
                text-white
                outline-none
                transition
                placeholder:text-white/30
                focus:border-violet-400/40
                focus:bg-white/5
              "
            />

            <button
              onClick={handleInputNext}
              disabled={!currentValue}
              className="
                rounded-2xl
                bg-linear-to-r
                from-violet-500
                to-fuchsia-500
                px-8
                py-4
                text-lg
                font-medium
                text-white
                transition
                hover:scale-[1.02]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              Continuar
            </button>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="
            text-sm
            text-white/40
            transition
            hover:text-white
            disabled:opacity-0
          "
        >
          Voltar
        </button>

        <span className="text-sm text-white/20">
          Help Hour ©
        </span>
      </div>
    </motion.div>
  )
}