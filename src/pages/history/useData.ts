import { useState } from 'react'
import { useSearchParams } from 'react-router'
// schemas
import { BmiHistoryListRequest, bmiHistoryListRequestSchema } from '@schemas'
// utils
import { changeQueryUrl, parseQueryParams } from '@utils'
// hooks
import { useDebouncedCallback } from '@hooks'

export const useData = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = parseQueryParams(searchParams, bmiHistoryListRequestSchema)
  const [searchTerm, setSearchTerm] = useState(query.search || '')

  /* -------------------------------- Handlers -------------------------------- */

  const handleChangeQueryUrl = useDebouncedCallback((newQuery: Partial<BmiHistoryListRequest>) => {
    changeQueryUrl(searchParams, setSearchParams, bmiHistoryListRequestSchema, newQuery)
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    handleChangeQueryUrl({
      page: 1,
      search: value,
    })
  }

  return { searchParams, query, searchTerm, handleChangeQueryUrl, handleSearch }
}
