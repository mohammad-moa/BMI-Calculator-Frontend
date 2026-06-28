import { memo, useId } from 'react'
// components
import { ColorType, SizeType } from '@components/index.type'
// icons
import { ChevronDown, ChevronUp } from '@icons'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'

export type SelectVariant = 'outlined' | 'filled' | 'standard'

type OptionType = {
  label: string
  value: number | string
}

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'onChange'
> & {
  options: OptionType[]
  label?: React.ReactNode
  isRequired?: boolean
  fullWidth?: boolean
  isError?: boolean
  helperText?: string
  onChange?: (value: number | string) => void
  variant?: SelectVariant
  color?: ColorType
  size?: SizeType
  rootClassName?: string
  contentClassName?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Select: React.FC<SelectProps> = memo(
  ({
    options,
    label,
    isRequired = false,
    fullWidth = false,
    isError = false,
    helperText,
    value,
    onChange,
    variant = 'outlined',
    color = 'secondary',
    size = 'medium',
    rootClassName,
    contentClassName,
    startIcon,
    endIcon,
    ...props
  }) => {
    const id = useId()
    const data = useData()
    const classes = useClasses()

    const renderLabel = () => {
      if (!label) return null
      return isRequired ? `${label} *` : label
    }

    const renderStartIcon = () => {
      if (!startIcon) return null
      return startIcon
    }

    const renderEndIcon = () => {
      if (!endIcon) {
        return data.isOpen ? <ChevronUp /> : <ChevronDown />
      }
      return endIcon
    }

    const renderHelperText = () => {
      if (!helperText) return null
      return <p className={classes.helperText({ isError })}>{helperText}</p>
    }

    const renderDropDown = () => {
      return (
        <div
          id={id}
          className={makeClass(classes.dropDown(), props.className)}
          onClick={data.handleToggle}
        >
          <span className={classes.selected()}>
            {value && !data.selectValue
              ? options.find((option) => option.value === value.toString())?.label
              : options.find((option) => option.value === data.selectValue.toString())?.label}
          </span>
        </div>
      )
    }

    const renderMenuList = () => {
      if (!data.isOpen) return null
      return (
        <div className={makeClass(classes.content(), classes.menuList())}>
          {options.map((option) => (
            <p
              key={option.value}
              className={classes.menuItem()}
              onClick={() => {
                data.handleSelectValue(option.value)
                onChange && onChange(option.value)
              }}
            >
              {option.label}
            </p>
          ))}
        </div>
      )
    }

    return (
      <div className={makeClass(classes.root({ fullWidth }), rootClassName)}>
        {renderLabel()}
        <div
          className={makeClass(
            classes.content({ isError, variant, color, size }),
            contentClassName
          )}
        >
          {renderStartIcon()}
          {renderDropDown()}
          {renderEndIcon()}
        </div>
        {renderMenuList()}
        {renderHelperText()}
      </div>
    )
  }
)
