"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { questions } from "@/app/constants/questions"
import { useBrandAnalyzerStore } from "@/app/store/brandAnalyzerStore"

import QuestionStep from "./QuestionStep"
import LoadingAnalysis from "./LoadingAnalysis"
import ResultScreen from "./ResultScreen"
import AnimatedBackground from "./AnimatedBackground"
import { useEffect } from "react"

export default function AnalyzerModal() {
  const {
    open,
    setOpen,
    step,
    loading,
    result,
  } = useBrandAnalyzerStore()

  const currentQuestion = questions[step]

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [open])

if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimatedBackground />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            w-full
            max-w-6xl
            mx-4
            overflow-hidden
            rounded-4xl
            border
            border-white/4
            bg-[#0B0613]/90
            shadow-[0_0_80px_rgba(168,85,247,0.15)]
            backdrop-blur-2xl
          "
        >
          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              right-5
              top-5
              z-50
              rounded-full
              border
              border-white/6
              bg-black/30
              backdrop-blur-xl
              p-2
              text-white/70
              transition
              hover:bg-white/6
              hover:text-white
            "
          >
            <X size={18} />
          </button>

          <div className="relative h-[90vh] overflow-y-auto hide-scrollbar px-6 py-10 md:px-12">
            {!loading && !result && currentQuestion && (
              <QuestionStep
                question={currentQuestion}
                currentStep={step}
                totalSteps={questions.length}
              />
            )}

            {loading && <LoadingAnalysis />}

            {!loading && result && (
              <ResultScreen />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}