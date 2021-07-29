export interface ResponseSuccessBody {
  data?: Record<string, unknown>,
}

export interface ResponseFailedBody {
  errorMessage?: string
}