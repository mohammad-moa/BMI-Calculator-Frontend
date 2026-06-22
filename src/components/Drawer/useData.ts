import { useEffect, useRef } from 'react'
// hooks
import { useClickOutside } from '@hooks'
// locals
import { DrawerProps } from '.'

export const useData = ({ open, onClose }: Pick<DrawerProps, 'open' | 'onClose'>) => {
  const drawerRef = useRef<HTMLDivElement | null>(null)
  useClickOutside(drawerRef, onClose)

  /* ------------------------------- LifeCycles ------------------------------- */

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  return { drawerRef }
}
