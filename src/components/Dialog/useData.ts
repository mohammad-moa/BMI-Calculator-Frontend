import { useEffect, useRef } from 'react'
// hooks
import { useClickOutside } from '@hooks'
// locals
import { DialogProps } from '.'

export const useData = ({ open, onClose }: Pick<DialogProps, 'open' | 'onClose'>) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  useClickOutside(dialogRef, onClose)

  /* ------------------------------- LifeCycles ------------------------------- */

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  return { dialogRef }
}
