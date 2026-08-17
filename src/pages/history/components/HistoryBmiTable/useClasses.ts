import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    notFound: cva('text-center pt-10 text-lg font-semibold text-gray-500'),
  }
}
