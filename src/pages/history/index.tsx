import { Link } from 'react-router'
// components
// icons
import { ChevronLeft } from '@icons'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { MAIN_ROUTE } from '@constants/routes'
import { Button } from '@components'

type HistoryPageProps = {}

export const HistoryPage: React.FC<HistoryPageProps> = () => {
  const classes = useClasses()
  const { TX } = useText()

  return (
    <div className={classes.root()}>
      <div className={classes.container()}>
        <Link to={MAIN_ROUTE} className={classes.back()}>
          <Button
            variant='text'
            color='info'
            startIcon={<ChevronLeft />}
            className={classes.back()}
          >
            {TX('BACK')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
