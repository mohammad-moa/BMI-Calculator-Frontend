import { memo, useId } from 'react'
// components
import { ColorType, SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export type TextFieldVariant = 'outlined' | 'filled' | 'standard'

export type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: React.ReactNode
    isRequired?: boolean
    fullWidth?: boolean
    isError?: boolean
    helperText?: string
    variant?: TextFieldVariant
    color?: ColorType
    size?: SizeType
    rootClassName?: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
  }

export const TextField: React.FC<TextFieldProps> = memo(
  ({
    label,
    isRequired = false,
    fullWidth = false,
    isError = false,
    helperText,
    variant = 'outlined',
    color = 'secondary',
    size = 'medium',
    rootClassName,
    startIcon,
    endIcon,
    rows = 1,
    ...props
  }) => {
    const id = useId()
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
      if (!endIcon) return null
      return endIcon
    }

    const renderHelperText = () => {
      if (!helperText) return null
      return <p className={classes.helperText({ isError })}>{helperText}</p>
    }

    const renderTextField = () => {
      if (rows <= 1) {
        return (
          <input id={id} className={makeClass(classes.textfield(), props.className)} {...props} />
        )
      }
      return (
        <textarea
          id={id}
          rows={rows}
          className={makeClass(classes.textfield(), props.className)}
          {...props}
        />
      )
    }

    return (
      <div>
        {renderLabel()}
        <div
          className={makeClass(
            classes.root({ fullWidth, isError, variant, color, size }),
            rootClassName
          )}
        >
          {renderStartIcon()}
          {renderTextField()}
          {renderEndIcon()}
        </div>
        {renderHelperText()}
      </div>
    )
  }
)
