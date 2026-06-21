import { memo } from 'react'
// components
import { Drawer } from '@components'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type ResultBmiDrawerProps = {
  isOpen: boolean
  onClose: () => void
  item: any
}

export const ResultBmiDrawer: React.FC<ResultBmiDrawerProps> = memo(
  ({ isOpen = false, onClose = () => undefined }) => {
    const className = useClasses()
    const { TX } = useText()

    return (
      <Drawer
        open={isOpen}
        onClose={onClose}
        header={TX('HOME.RESULT')}
        className={className.root()}
      ></Drawer>
    )
  }
)
