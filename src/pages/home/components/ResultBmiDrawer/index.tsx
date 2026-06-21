import { memo } from 'react'
// components
import { Drawer } from '@components'
// models
import { Bmi } from '@models'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type ResultBmiDrawerProps = {
  isOpen: boolean
  onClose: () => void
  item: Bmi
}

export const ResultBmiDrawer: React.FC<ResultBmiDrawerProps> = memo(
  ({ isOpen = false, onClose = () => undefined, item = new Bmi() }) => {
    const className = useClasses()
    const { TX } = useText()

    return (
      <Drawer
        open={isOpen}
        onClose={onClose}
        header={TX('HOME.RESULT')}
        className={className.root()}
      >
        <h3>{item.getBmi()}</h3>
      </Drawer>
    )
  }
)
