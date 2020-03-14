export interface PreviewState {
  loading: boolean
  error: boolean
  comparisonData: {
    home: object | null
    away: object | null
    startDate: number
    matchLocation: string
  }
  message: string
}
