import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex justify-center w-full'),
    button: cva('p-2'),
  }
}
