// components
import { Button, TextField } from '@components'
// icons
import { ChevronLeft, Search } from '@icons'
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
        <Button
          variant='outlined'
          color='info'
          startIcon={<ChevronLeft />}
          className={classes.back()}
          onClick={data.handleBack}
        >
          {TX('BACK')}
        </Button>
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
