import { useEffect } from 'react'
// locals
import { ToastProps } from '.'

export const useData = ({
  open,
  onClose,
  autoCloseDuration,
  onConfirm,
}: Pick<ToastProps, 'open' | 'onClose' | 'autoCloseDuration' | 'onConfirm'>) => {
  useEffect(() => {
    if (!open || !!onConfirm || !autoCloseDuration) return

    const timer = setTimeout(() => {
      onClose()
    }, autoCloseDuration)

    return () => clearTimeout(timer)
  }, [open, onClose, autoCloseDuration, onConfirm])
}
