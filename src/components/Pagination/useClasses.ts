import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex justify-center items-center gap-1.5 w-full flex-wrap p-2'),
    button: cva('px-4 py-1.5 w-9 h-9'),
    iconButton: cva('p-1.5'),
  }
}
