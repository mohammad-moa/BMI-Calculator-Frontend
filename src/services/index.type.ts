import { AxiosRequestConfig } from 'axios'

export type ServerError = {
  error: string
  message: string
  statusCode: number
}

export type QueryResponse<D = unknown> = {
  data: D
}

export type QueryRequest<P = unknown, Q = unknown> = {
  signal?: AbortSignal
  params?: P
  queryParams?: Q
}

export type MutationResponse<D = unknown> = {
  data: D
}

export type MutationRequest<D, P = unknown> = {
  data: D
  params?: P
  options?: AxiosRequestConfig
}
