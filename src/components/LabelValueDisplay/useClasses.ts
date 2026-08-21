import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    labelValueDisplay: cva('flex items-center justify-between gap-10 p-1'),
    label: cva('font-bold text-gray-900', {
      variants: {
        color: {
          primary: 'text-orange-500',
          secondary: 'text-zinc-500',
          info: 'text-blue-500',
          success: 'text-green-500',
          warning: 'text-amber-500',
          error: 'text-red-500',
        },
      },
    }),
    value: cva('text-gray-700', {
      variants: {
        color: {
          primary: 'text-orange-500',
          secondary: 'text-zinc-500',
          info: 'text-blue-500',
          success: 'text-green-500',
          warning: 'text-amber-500',
          error: 'text-red-500',
        },
      },
    }),
    loading: cva('block animate-pulse rounded-md bg-gray-200 w-20 h-4.5 p-1'),
  }
}
