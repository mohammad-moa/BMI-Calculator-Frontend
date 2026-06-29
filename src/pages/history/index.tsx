import { Link } from 'react-router'
// components
import { Button, TextField } from '@components'
// icons
import { ChevronLeft, Search } from '@icons'
// constants
import { MAIN_ROUTE } from '@constants/routes'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'

type HistoryPageProps = {}

export const HistoryPage: React.FC<HistoryPageProps> = () => {
  const classes = useClasses()
  const { TX } = useText()
  const data = useData()

  return (
    <div className={classes.root()}>
      <div className={classes.container()}>
        <Link to={MAIN_ROUTE}>
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
      </div>
    </div>
  )
}
