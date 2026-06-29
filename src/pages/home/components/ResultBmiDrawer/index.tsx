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
    const classes = useClasses()
    const { TX } = useText()

    return (
      <Drawer
        open={isOpen}
        onClose={onClose}
        header={TX('HOME.RESULT')}
        contentClassName={classes.content()}
        actions={{
          cancel: {
            fullWidth: true,
            variant: 'contained',
            children: TX('HOME.I_UNDERSTAND'),
          },
        }}
      >
        <h3 className={classes.bmi()}>
          <span>{TX('HOME.BMI')}</span> {item.getBmi()}
        </h3>
        <div className={classes.details()}>
          <Card variant='standard' color='info' rootClassName={classes.bodyFat()}>
            <span>{TX('HOME.BODY_FAT')}:</span> {item.getBodyFat()}
          </Card>
          <p className={classes.message()}>
            {TX('HOME.BMI_STATUS_MESSAGE', item.getStatusDisplay())}
          </p>
        </div>
      </Drawer>
    )
  }
)
