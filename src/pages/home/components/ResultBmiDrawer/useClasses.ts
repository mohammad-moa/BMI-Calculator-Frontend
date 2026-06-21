import { cva } from 'class-variance-authority';

export const useClasses = () => {
  return {
    root: cva('flex flex-1 items-center justify-between gap-30'),
  }
}
