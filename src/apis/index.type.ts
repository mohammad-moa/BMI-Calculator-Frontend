import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'

export type BaseQueryOptions<TQueryFnData, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, Error, TData>,
  'queryFn' | 'queryKey'
>

export type BaseMutationOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, Error, TVariables>,
  'mutationFn'
>
