import { memo } from 'react'
// models
import { Bmi } from '@models'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { HistoryBmiItem } from '../HistoryBmiItem'

type HistoryBmiListProps = {
  items: Bmi[]
}

export const HistoryBmiList: React.FC<HistoryBmiListProps> = memo(({ items = [] }) => {
  const classes = useClasses()
  const { TX } = useText()

  const renderNotFoundContent = () => {
    return <div className={classes.notFound()}>{TX('NOT_DATA_FOUND')}</div>
  }

  const renderContent = () => {
    if (items.length <= 0) return renderNotFoundContent()
    return items.map((item) => (
      <div key={item.getId()}>
        <HistoryBmiItem item={item} />
      </div>
    ))
  }

  return <>{renderContent()}</>
})
