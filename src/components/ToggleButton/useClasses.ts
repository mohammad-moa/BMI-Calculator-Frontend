import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    toggleButton: cva('flex items-center justify-between gap-1 p-1.5 rounded-2xl', {
      variants: {
        color: {
          primary: 'bg-orange-100/80',
          secondary: 'bg-zinc-200/80',
          info: 'bg-blue-100/90',
          success: 'bg-green-100/80',
          warning: 'bg-amber-100/80',
          error: 'bg-red-100/80',
        },
        fullWidth: {
          true: 'w-full',
          false: 'w-max',
        },
      },
      defaultVariants: {
        color: 'info',
        fullWidth: false,
      },
    }),
    button: cva('text-gray-900 pt-2.5, px-4'),
  }
}
