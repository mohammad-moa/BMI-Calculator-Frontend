import { memo } from 'react'
// models
import { Bmi } from '@models'
// locals
import { useClasses } from './useClasses'
import { HistoryBmiItem } from '../HistoryBmiItem'

type HistoryBmiListProps = {
  items: Bmi[]
}

export const HistoryBmiList: React.FC<HistoryBmiListProps> = memo(({ items = [] }) => {
  const classes = useClasses()

  return (
    <div className={classes.root()}>
      {items.map((item) => (
        <div key={item.getId()}>
          <HistoryBmiItem item={item} />
        </div>
      ))}
    </div>
  )
})
