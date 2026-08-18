import { Link } from 'react-router'
// components
import { Button, Pagination, TextField } from '@components'
// icons
import { ChevronLeft, Search } from '@icons'
// constants
import { MAIN_ROUTE } from '@constants/routes'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'
import { HistoryBmiTable } from './components'

type HistoryPageProps = {}

export const HistoryPage: React.FC<HistoryPageProps> = () => {
  const classes = useClasses()
  const { TX } = useText()
  const data = useData()

  return (
    <div className={classes.root()}>
      <Link to={MAIN_ROUTE} className={classes.link()}>
        <Button color='info' startIcon={<ChevronLeft />} className={classes.back()}>
          {TX('BACK')}
        </Button>
      </Link>
      <div className={classes.titleContainer()}>
        <h4 className={classes.title()}>{TX('HISTORY')}</h4>
        <TextField
          fullWidth
          startIcon={<Search />}
          value={data.searchTerm || ''}
          onChange={(e) => data.handleSearch(e.target.value)}
        />
      </div>
      <div className={classes.content()}>
        <HistoryBmiTable items={data.historyList.data.getItems()} isLoading={data.isLoading} />
        <Pagination
          meta={data.historyList.data.getMeta()}
          onPaginate={(page) => data.handleChangeQueryUrl({ page })}
          disabled={data.isLoading}
          className='mt-auto'
        />
      </div>
    </div>
  )
}
