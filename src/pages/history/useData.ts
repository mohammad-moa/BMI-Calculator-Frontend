import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
// schemas
import { BmiHistoryListRequest, bmiHistoryListRequestSchema } from '@schemas'
// utils
import { changeQueryUrl, parseQueryParams } from '@utils'
// hooks
import { useDebouncedCallback } from '@hooks'

export const useData = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const query = parseQueryParams(searchParams, bmiHistoryListRequestSchema)
  const [searchTerm, setSearchTerm] = useState(query.search || '')

  /* -------------------------------- Handlers -------------------------------- */

  const handleBack = () => {
    navigate(-1)
  }

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

  return { handleBack, searchParams, query, searchTerm, handleChangeQueryUrl, handleSearch }
}
