import { MutationRequest, QueryRequest } from '../index.type'
import axios from '../client-api'
// schemas
import { CalculateBmiFormValues } from '@schemas'
// models
import { Bmi, IBmi, IPaginate } from '@models'

export const create = async ({ data }: MutationRequest<CalculateBmiFormValues>) => {
  const response = await axios.post<Bmi>('/bmi', data)
  return response.data
}

export const getHistoryList = async ({ signal, queryParams }: QueryRequest) => {
  const response = await axios.get<IPaginate<IBmi>>(`/bmi/history`, { signal, params: queryParams })
  return response.data
}
