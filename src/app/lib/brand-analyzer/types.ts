export interface BrandAnswers {
  businessType: string
  brandName: string
  instagram: string
  objective: string
  problem: string
  marketingLevel: string
}

export interface BrandScores {
  visibility: number
  branding: number
  positioning: number
  growth: number
  consistency: number
}

export interface BrandAnalysisResult {
  analysis: string
  scores: BrandScores
  recommendations: string[]
  whatsappMessage: string
}

export interface QuestionOption {
  label: string
  value: string
}

export interface Question {
  id: keyof BrandAnswers
  question: string
  description?: string
  type: "select" | "input"
  placeholder?: string
  options?: QuestionOption[]
}