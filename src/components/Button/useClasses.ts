import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    button: cva(
      'flex items-center justify-center gap-2 rounded-xl cursor-pointer transition-all duration-200 ease-in-out disabled:opacity-50 disabled:pointer-events-none',
      {
        variants: {
          variant: {
            contained: 'text-white!',
            outlined: 'border-2',
            text: 'border-0',
          },
          color: {
            primary: 'text-orange-500 border-orange-500',
            secondary: 'text-zinc-500 border-zinc-500',
            info: 'text-blue-500 border-blue-500',
            success: 'text-green-500 border-green-500',
            warning: 'text-amber-500 border-amber-500',
            error: 'text-red-500 border-red-500',
          },
          size: {
            small: 'py-2 px-6 text-sm',
            medium: 'py-2.5 px-9 text-base',
            large: 'py-3 px-11 text-lg',
          },
          fullWidth: {
            true: 'w-full',
            false: '',
          },
        },
        compoundVariants: [
          {
            variant: 'contained',
            color: 'primary',
            class: 'bg-orange-500 hover:bg-orange-600 focus:ring-orange-300',
          },
          {
            variant: 'contained',
            color: 'secondary',
            class: 'bg-zinc-500 hover:bg-zinc-600 focus:ring-zinc-300',
          },
          {
            variant: 'contained',
            color: 'info',
            class: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300',
          },
          {
            variant: 'contained',
            color: 'success',
            class: 'bg-green-500 hover:bg-green-600 focus:ring-green-300',
          },
          {
            variant: 'contained',
            color: 'warning',
            class: 'bg-amber-500 hover:bg-amber-600 focus:ring-amber-300',
          },
          {
            variant: 'contained',
            color: 'error',
            class: 'bg-red-500 hover:bg-red-600 focus:ring-red-300',
          },
          {
            variant: 'text',
            color: 'primary',
            class: 'hover:bg-orange-50 focus:ring-orange-300',
          },
          {
            variant: 'text',
            color: 'secondary',
            class: 'hover:bg-zinc-50 focus:ring-zinc-300',
          },
          {
            variant: 'text',
            color: 'info',
            class: 'hover:bg-blue-50 focus:ring-blue-300',
          },
          {
            variant: 'text',
            color: 'success',
            class: 'hover:bg-green-50 focus:ring-green-300',
          },
          {
            variant: 'text',
            color: 'warning',
            class: 'hover:bg-amber-50 focus:ring-amber-300',
          },
          {
            variant: 'text',
            color: 'error',
            class: 'hover:bg-red-50 focus:ring-red-300',
          },
          {
            variant: 'outlined',
            color: 'primary',
            class: 'hover:bg-orange-50 focus:ring-orange-300',
          },
          {
            variant: 'outlined',
            color: 'secondary',
            class: 'hover:bg-zinc-50 focus:ring-zinc-300',
          },
          {
            variant: 'outlined',
            color: 'info',
            class: 'hover:bg-blue-50 focus:ring-blue-300',
          },
          {
            variant: 'outlined',
            color: 'success',
            class: 'hover:bg-green-50 focus:ring-green-300',
          },
          {
            variant: 'outlined',
            color: 'warning',
            class: 'hover:bg-amber-50 focus:ring-amber-300',
          },
          {
            variant: 'outlined',
            color: 'error',
            class: 'hover:bg-red-50 focus:ring-red-300',
          },
        ],
        defaultVariants: {
          variant: 'contained',
          color: 'primary',
          size: 'medium',
        },
      }
    ),
  }
}
