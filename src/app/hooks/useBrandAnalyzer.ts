"use client"

import { useBrandAnalyzerStore } from "@/app/store/brandAnalyzerStore"

export function useBrandAnalyzer() {
  const {
    answers,
    setLoading,
    setResult,
    nextStep,
  } = useBrandAnalyzerStore()

  const submitAnalysis = async () => {
    try {
      setLoading(true)

      const response = await fetch(
        "/api/analyze-brand",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(answers),
        }
      )

      if (!response.ok) {
        throw new Error(
          "Erro ao gerar análise."
        )
      }

      const data = await response.json()

      // Simula tempo de análise premium
      await new Promise((resolve) =>
        setTimeout(resolve, 3500)
      )

      setResult(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleNextStep = async (
    currentStep: number,
    totalSteps: number
  ) => {
    const isLastStep =
      currentStep === totalSteps - 1

    if (isLastStep) {
      await submitAnalysis()
      return
    }

    nextStep()
  }

  return {
    submitAnalysis,
    handleNextStep,
  }
}