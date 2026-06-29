import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex flex-1'),
    container: cva('my-5'),
    back: cva('p-0'),
  }
}
