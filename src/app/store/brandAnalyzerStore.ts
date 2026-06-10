import { create } from "zustand"

import {
  BrandAnalysisResult,
  BrandAnswers,
} from "../lib/brand-analyzer/types"

interface BrandAnalyzerState {
  open: boolean
  step: number
  loading: boolean

  answers: BrandAnswers

  result: BrandAnalysisResult | null

  setOpen: (open: boolean) => void

  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void

  updateAnswer: (
    field: keyof BrandAnswers,
    value: string
  ) => void

  setLoading: (loading: boolean) => void

  setResult: (
    result: BrandAnalysisResult | null
  ) => void

  reset: () => void
}

const initialAnswers: BrandAnswers = {
  businessType: "",
  brandName: "",
  instagram: "",
  objective: "",
  problem: "",
  marketingLevel: "",
}

export const useBrandAnalyzerStore =
  create<BrandAnalyzerState>((set) => ({
    open: false,
    step: 0,
    loading: false,

    answers: initialAnswers,

    result: null,

    setOpen: (open) =>
      set({
        open,
      }),

    nextStep: () =>
      set((state) => ({
        step: state.step + 1,
      })),

    prevStep: () =>
      set((state) => ({
        step:
          state.step > 0
            ? state.step - 1
            : 0,
      })),

    setStep: (step) =>
      set({
        step,
      }),

    updateAnswer: (field, value) =>
      set((state) => ({
        answers: {
          ...state.answers,
          [field]: value,
        },
      })),

    setLoading: (loading) =>
      set({
        loading,
      }),

    setResult: (result) =>
      set({
        result,
      }),

    reset: () =>
      set({
        step: 0,
        loading: false,
        result: null,
        answers: initialAnswers,
      }),
  }))