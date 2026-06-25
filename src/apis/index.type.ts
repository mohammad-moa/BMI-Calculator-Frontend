import { ServerError } from '@services'
import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'

export type BaseQueryOptions<TQueryFnData, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ServerError, TData>,
  'queryFn' | 'queryKey'
>

export type BaseMutationOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ServerError, TVariables>,
  'mutationFn'
>
