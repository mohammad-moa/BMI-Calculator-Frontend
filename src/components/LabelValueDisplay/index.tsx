import { memo } from 'react'
// utils
import { makeClass } from '@utils'
// locals
import { useClasses } from './useClasses'
import { ColorType } from '@components/index.type'

export type LabelValueDisplayProps = {
  label: string
  labelColor?: ColorType
  value?: React.ReactNode
  valueColor?: ColorType
  isLoading?: boolean
  rootClassName?: string
}

export const LabelValueDisplay: React.FC<LabelValueDisplayProps> = memo(
  ({ label, labelColor, value, valueColor, isLoading = false, rootClassName }) => {
    const classes = useClasses()

    return (
      <div className={makeClass(classes.labelValueDisplay(), rootClassName)}>
        <h6 className={classes.label({ color: labelColor })}>
          {isLoading ? <span className={classes.loading()} /> : label}
        </h6>

        <span className={classes.value({ color: valueColor })}>
          {isLoading ? <span className={classes.loading()} /> : (value ?? '-')}
        </span>
      </div>
    )
  }
)
