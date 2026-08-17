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
import { Bmi, Meta } from '@models'

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
        <HistoryBmiTable
          items={[
            {
              age: 20,
              weight: 50,
              height: 150,
            },
            {
              age: 28,
              weight: 87,
              height: 187,
            },
          ].map(
            (item, i) =>
              new Bmi({
                id: String(i + 1),
                age: item.age,
                weight: item.weight,
                height: item.height,
              })
          )}
        />
        <Pagination
          meta={
            new Meta({
              currentPage: 1,
              totalPages: 10,
            })
          }
          className='mt-auto'
        />
      </div>
    </div>
  )
}
