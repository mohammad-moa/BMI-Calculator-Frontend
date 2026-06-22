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

type DrawerPosition = 'top' | 'right' | 'bottom' | 'left'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  open: boolean
  onClose: () => void
  header: React.ReactNode
  subHeader?: React.ReactNode
  actions?: Partial<Record<'confirm' | 'cancel', ButtonProps>> | ButtonProps[]
  position?: DrawerPosition
  size?: SizeType
  disableBackdrop?: boolean
  rootClassName?: string
  contentClassName?: string
}

export const Drawer: React.FC<DrawerProps> = memo(
  ({
    children,
    open = false,
    onClose,
    header,
    subHeader,
    actions,
    position = 'bottom',
    size,
    disableBackdrop = false,
    rootClassName,
    contentClassName,
  }) => {
    const data = useData({ open, onClose })
    const className = useClasses()
    const drawerRoot = document.getElementById('modal')
    if (!drawerRoot || !open) return null

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
          {open ? (
            <div
              ref={data.drawerRef}
              className={makeClass(
                className.dialog({
                  position,
                  size,
                }),
                rootClassName
              )}
            >
              {renderHeader()}
              {renderSubHeader()}
              <div className={makeClass(className.content(), contentClassName)}>{children}</div>
              {renderActions()}
            </div>
          ) : null}
        </div>
      )
    }

    return createPortal(renderContent(), drawerRoot)
  }
)
