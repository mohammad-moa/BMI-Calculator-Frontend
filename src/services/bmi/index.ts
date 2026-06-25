import { MutationRequest } from '../index.type'
import axios from '../client-api'
// schemas
import { CalculateBmiFormValues } from '@schemas'
// models
import { Bmi } from '@models'

export const create = async ({ data }: MutationRequest<CalculateBmiFormValues>) => {
  const response = await axios.post<Bmi>('/bmiw', data)
  return response.data
}
