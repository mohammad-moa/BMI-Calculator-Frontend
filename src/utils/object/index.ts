import { URLSearchParamsInit } from 'react-router'
import { z } from 'zod'

export const removeEmptyValues = <T>(target: T): T => {
  for (const key in target) {
    if (
      target[key] === undefined ||
      target[key] === null ||
      target[key] === '' ||
      (target[key] as T[]).length === 0
    ) {
      delete target[key]
    }
  }
  return target
}

export const parseQueryParams = <T extends Record<string, any>>(
  searchParams: URLSearchParams,
  schema: z.ZodType<T>
): T => {
  const plainParams = Object.fromEntries(searchParams.entries())
  try {
    return schema.parse(plainParams)
  } catch {
    return schema.parse({})
  }
}

export const changeQueryUrl = <T extends Record<string, any>>(
  searchParams: URLSearchParams,
  setSearchParams: (value: URLSearchParamsInit) => void,
  schema: z.ZodType<T>,
  newQuery: Partial<T>
) => {
  const currentQuery = parseQueryParams(searchParams, schema)

  const combinedParams = { ...currentQuery, ...newQuery }
  const cleanQueryParams = removeEmptyValues(combinedParams)
  setSearchParams(cleanQueryParams as Record<string, string>)
}
