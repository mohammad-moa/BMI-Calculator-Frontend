import { memo } from 'react'
// components
import { ColorType, SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export type ButtonVariant = 'contained' | 'outlined' | 'text'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  color?: ColorType
  size?: SizeType
  fullWidth?: boolean
  rootClassName?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = memo(
  ({
    children,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    fullWidth = false,
    rootClassName,
    startIcon,
    endIcon,
    ...props
  }) => {
    const className = useClasses()

    const renderStartIcon = () => {
      if (!startIcon) return null
      return startIcon
    }

    const renderEndIcon = () => {
      if (!endIcon) return null
      return endIcon
    }

    return (
      <div
        className={makeClass(rootClassName, {
          'w-full': fullWidth,
        })}
      >
        <button
          className={makeClass(
            className.button({
              variant,
              color,
              size,
              fullWidth,
            }),
            props.className
          )}
          {...props}
        >
          {renderStartIcon()}
          <span>{children}</span>
          {renderEndIcon()}
        </button>
      </div>
    )
  }
)
