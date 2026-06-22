import { memo } from 'react'
import { createPortal } from 'react-dom'
// components
import { Button, ButtonProps } from '@components/Button'
import { SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
import { generateUUID } from '@utils/basic'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'

export type DialogProps = Omit<React.DialogHTMLAttributes<HTMLDialogElement>, 'onClose'> & {
  onClose: () => void
  header: React.ReactNode
  subHeader?: React.ReactNode
  actions?: Partial<Record<'confirm' | 'cancel', ButtonProps>> | ButtonProps[]
  size?: SizeType
  disableBackdrop?: boolean
  rootClassName?: string
}

export const Dialog: React.FC<DialogProps> = memo(
  ({
    children,
    open = false,
    onClose,
    header,
    subHeader,
    actions,
    size = 'medium',
    disableBackdrop = false,
    rootClassName,
    ...props
  }) => {
    const data = useData({ open, onClose })
    const className = useClasses()
    const dialogRoot = document.getElementById('modal')
    if (!dialogRoot || !open) return null

    const renderHeader = () => {
      if (!header) return null
      return <h4 className={className.header()}>{header}</h4>
    }

    const renderSubHeader = () => {
      if (!subHeader) return null
      return <p className={className.subHeader()}>{subHeader}</p>
    }

    const renderActions = () => {
      if (!actions) return null
      if (!Array.isArray(actions)) {
        return (
          <div className={className.actions()}>
            {actions.confirm && <Button {...actions.confirm}>{actions.confirm?.children}</Button>}
            {actions.cancel && (
              <Button variant='text' onClick={onClose} {...actions.cancel}>
                {actions.cancel?.children}
              </Button>
            )}
          </div>
        )
      }
      return (
        <div className={className.actions()}>
          {actions.map((action) => (
            <Button key={generateUUID()} {...action} />
          ))}
        </div>
      )
    }

    const renderContent = () => {
      return (
        <div className={className.root()}>
          {!disableBackdrop && <div className={className.backdrop()}></div>}
          <dialog
            open={open}
            onClose={onClose}
            ref={data.dialogRef}
            className={makeClass(
              className.dialog({
                size,
              }),
              rootClassName
            )}
            {...props}
          >
            {renderHeader()}
            {renderSubHeader()}
            <div className={className.content()}>{children}</div>
            {renderActions()}
          </dialog>
        </div>
      )
    }

    return createPortal(renderContent(), dialogRoot)
  }
)
