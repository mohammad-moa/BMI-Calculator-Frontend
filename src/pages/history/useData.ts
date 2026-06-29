import { useNavigate, useSearchParams } from 'react-router'
// schemas
import { BmiHistoryListRequest, bmiHistoryListRequestSchema } from '@schemas'
// utils
import { changeQueryUrl, parseQueryParams } from '@utils'

export const useData = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const query = parseQueryParams(searchParams, bmiHistoryListRequestSchema)

  /* -------------------------------- Handlers -------------------------------- */

  const handleBack = () => {
    navigate(-1)
  }

  const handleChangeQueryUrl = (newQuery: Partial<BmiHistoryListRequest>) => {
    changeQueryUrl(searchParams, setSearchParams, bmiHistoryListRequestSchema, newQuery)
  }

  return { handleBack, query, searchParams, handleChangeQueryUrl }
}
