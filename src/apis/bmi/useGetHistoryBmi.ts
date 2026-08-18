import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { BaseQueryOptions } from '@apis/index.type'
// models
import { Bmi, IBmi, IPaginate, Paginate } from '@models'
// services
import { bmiService } from '@services'
// utils
import { removeEmptyValues } from '@utils'
// locals
import { HISTORY_LIST } from './queryKey'

export const useGetHistoryBmi = (options?: BaseQueryOptions<IPaginate<IBmi>>) => {
  const handleGetHistoryBmi = async ({ signal, queryKey }: QueryFunctionContext) => {
    let queryParams = {}
    if (queryKey[1]) {
      queryParams = JSON.parse(queryKey[1] as string)
    }
    return await bmiService.getHistoryList({ signal, queryParams: removeEmptyValues(queryParams) })
  }

  const { data, ...query } = useQuery({
    ...options,
    queryKey: [HISTORY_LIST, ...(options?.queryKey || [])],
    queryFn: handleGetHistoryBmi,
  })

  return { data: new Paginate(Bmi, data), ...query }
}
