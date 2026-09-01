import { memo } from 'react'
// components
import { Button, ButtonProps } from '@components'
import { ColorType, SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export interface ToggleOption extends ButtonProps {
  value: string
  label?: React.ReactNode
}

export interface ToggleButtonGroupProps {
  options: ToggleOption[]
  value: string
  onChange: (value: string) => void
  color?: ColorType
  size?: SizeType
  fullWidth?: boolean
  rootClassName?: string
  buttonClassName?: string
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = memo(
  ({
    options,
    value,
    onChange,
    color = 'info',
    size = 'small',
    fullWidth = false,
    rootClassName,
    buttonClassName,
  }) => {
    const classes = useClasses()

    return (
      <div className={makeClass(classes.toggleButton({ color, fullWidth }), rootClassName)}>
        {options.map(
          ({ value: optionValue, label, children, className: optClassName, ...optionProps }) => {
            const isSelected = value === optionValue

            return (
              <Button
                key={optionValue}
                type='button'
                variant={isSelected ? 'contained' : 'text'}
                color={isSelected ? color : 'secondary'}
                size={size}
                fullWidth={fullWidth}
                onClick={() => onChange(optionValue)}
                className={makeClass(classes.button(), buttonClassName, optClassName)}
                {...optionProps}
              >
                {label || children}
              </Button>
            )
          }
        )}
      </div>
    )
  }
)
