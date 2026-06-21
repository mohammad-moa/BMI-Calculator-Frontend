import { memo } from 'react'
// components
import { Card, Drawer } from '@components'
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
        contentClassName={className.content()}
        actions={{
          cancel: {
            fullWidth: true,
            variant: 'contained',
            children: TX('HOME.I_UNDERSTAND'),
          },
        }}
      >
        <h3 className={className.bmi()}>
          <span>{TX('HOME.BMI')}</span> {item.getBmi()}
        </h3>
        <div className={className.details()}>
          <Card variant='standard' color='info' rootClassName={className.bodyFat()}>
            <span>{TX('HOME.BODY_FAT')}:</span> {item.getBodyFat()}
          </Card>
          <p className={className.message()}>
            {TX('HOME.BMI_STATUS_MESSAGE', item.getStatusDisplay())}
          </p>
        </div>
      </Drawer>
    )
  }
)
