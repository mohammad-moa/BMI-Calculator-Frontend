import { ServerError } from '@services'
import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'

export type BaseQueryOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ServerError, TData>,
  'queryFn'
>

export type BaseMutationOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ServerError, TVariables>,
  'mutationFn'
>
