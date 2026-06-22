import { createContext, PropsWithChildren, useCallback, useState } from 'react'
// components
import { Toast, ToastProps } from '@components'

const initialValue: ToastProps = {
  open: false,
  onClose: () => undefined,
  message: '',
}

type OmitToastProps = Omit<ToastProps, 'open' | 'onClose'>

type ToastContextType = {
  toast: (params: OmitToastProps) => void
  closeToast: () => void
}

export const ToastContext = createContext<ToastContextType | null>(null)

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState<ToastProps>(initialValue)

  const handleCloseToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }))
  }, [])

  const toastConfig = useCallback(
    (params: OmitToastProps) => {
      setToast({
        ...params,
        open: true,
        onClose: handleCloseToast,
      })
    },
    [handleCloseToast]
  )

  return (
    <ToastContext.Provider
      value={{
        toast: toastConfig,
        closeToast: handleCloseToast,
      }}
    >
      {children}
      <Toast {...toast} />
    </ToastContext.Provider>
  )
}
