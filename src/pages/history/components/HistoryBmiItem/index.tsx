import { memo } from 'react'
// models
import { Bmi } from '@models'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type HistoryBmiItemProps = {
  item: Bmi
}

export const HistoryBmiItem: React.FC<HistoryBmiItemProps> = memo(({ item = new Bmi() }) => {
  const classes = useClasses()
  const { TX } = useText()

  return (
    <div className={classes.root()}>
      {TX('HISTORY.AGE')}: {item.getAge()}
    </div>
  )
})
