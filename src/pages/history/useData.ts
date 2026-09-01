import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
// apis
import { useGetHistoryBmi } from '@apis'
// schemas
import { BmiHistoryListRequest, bmiHistoryListRequestSchema } from '@schemas'
// enums
import { BmiStatusEnum } from '@enums'
// utils
import { capitalizeString, changeQueryUrl, parseQueryParams } from '@utils'
// hooks
import { useClickOutside, useDebouncedCallback } from '@hooks'

export type LayoutType = 'List' | 'Grid'

export const useData = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = parseQueryParams(searchParams, bmiHistoryListRequestSchema)
  const [searchTerm, setSearchTerm] = useState(query.search || '')
  const [isOpenPopover, setIsOpenPopover] = useState(false)
  const popoverRef = useRef<HTMLDivElement | null>(null)
  useClickOutside(popoverRef, () => setIsOpenPopover(false))
  const [layoutType, setLayoutType] = useState<LayoutType>('List')

  /* ---------------------------------- Apis ---------------------------------- */

  const historyList = useGetHistoryBmi({
    queryKey: [JSON.stringify(query)],
  })

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

  const handleTogglePopover = () => {
    setIsOpenPopover((prevState) => !prevState)
  }

  /* ---------------------------------- Data ---------------------------------- */

  const statusOptions = Object.values(BmiStatusEnum).map((value) => ({
    label: capitalizeString(value),
    value,
  }))

  return {
    searchParams,
    query,
    searchTerm,
    popoverRef,
    isOpenPopover,
    handleTogglePopover,
    layoutType,
    setLayoutType,
    statusOptions,
    historyList,
    isLoading: historyList.isLoading || historyList.isFetching,
    handleChangeQueryUrl,
    handleSearch,
  }
}
