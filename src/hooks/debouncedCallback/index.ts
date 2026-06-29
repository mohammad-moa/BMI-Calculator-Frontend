import { useEffect, useRef, useMemo } from 'react'

export const useDebouncedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 1000
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useMemo(() => {
    let timer: ReturnType<typeof setTimeout>

    return (...args: Parameters<T>) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    }
  }, [delay])
}
