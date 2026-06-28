import { memo } from 'react'
import { createPortal } from 'react-dom'
// components
import { Button } from '@components/Button'
import { ColorType } from '@components/index.type'
// icons
import {
  AlertSquareRounded,
  Close,
  Loader,
  Refresh,
  SquareRoundedCheck,
  SquareRoundedClose,
} from '@icons'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'

export type ToastVariant = 'elevation' | 'outlined'

export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'

export type ToastIcon = 'success' | 'error' | 'warning' | 'loading' | 'refresh'

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  open: boolean
  onClose: () => void
  message: string
  description?: string
  color?: ColorType
  position?: ToastPosition
  variant?: ToastVariant
  icon?: ToastIcon
  autoCloseDuration?: number
  onConfirm?: () => void
  confirmLabel?: string
  rootClassName?: string
}

export const Toast: React.FC<ToastProps> = memo(
  ({
    open = false,
    onClose,
    message,
    description,
    color = 'primary',
    position = 'top-center',
    variant = 'outlined',
    icon,
    autoCloseDuration = 4500,
    onConfirm,
    confirmLabel = 'Confirm',
    rootClassName,
    ...props
  }) => {
    useData({ open, onClose, autoCloseDuration, onConfirm })
    const classes = useClasses()
    const toastRoot = document.getElementById('toast')
    if (!toastRoot || !open) return null

    const renderIcon = () => {
      if (!icon) return null
      return {
        success: <SquareRoundedCheck />,
        error: <SquareRoundedClose />,
        warning: <AlertSquareRounded />,
        loading: <Loader />,
        refresh: <Refresh />,
      }[icon]
    }

    const renderCloseButton = () => {
      return (
        <span onClick={onClose} className='cursor-pointer'>
          <Close />
        </span>
      )
    }

    const renderAction = () => {
      if (!onConfirm) return null
      return (
        <Button size='small' color={color} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      )
    }

    const renderContent = () => {
      return (
        <div
          className={makeClass(
            classes.toast({
              position,
              color,
              variant,
            }),
            rootClassName
          )}
          {...props}
        >
          <div className={classes.contentContainer()}>
            {renderIcon()}
            <div className={classes.content()}>
              <h5 className={classes.message()}>{message}</h5>
              {description && <p className={classes.description()}>{description}</p>}
            </div>
            {renderCloseButton()}
          </div>

          {renderAction()}
        </div>
      )
    }

    return createPortal(renderContent(), toastRoot)
  }
)
