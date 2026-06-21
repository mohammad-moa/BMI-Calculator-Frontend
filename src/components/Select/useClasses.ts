import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('relative', {
      variants: {
        fullWidth: {
          true: 'w-full',
          false: 'w-1/2',
        },
      },
    }),
    content: cva('flex gap-2.5 my-1 text-gray-900 rounded-lg', {
      variants: {
        isError: {
          true: 'text-red-500 border-red-500!',
          false: '',
        },
        variant: {
          outlined: 'border-2',
          filled: 'bg-zinc-200',
          standard: 'border-b-2 rounded-none',
        },
        color: {
          primary: 'border-orange-500',
          secondary: 'border-zinc-500',
          info: 'border-blue-500',
          success: 'border-green-500',
          warning: 'border-amber-500',
          error: 'border-red-500',
        },
        size: {
          small: 'py-2 px-3 text-sm',
          medium: 'py-2.5 px-4 text-base',
          large: 'py-3 px-5 text-lg',
        },
      },
      compoundVariants: [
        {
          variant: 'filled',
          color: 'primary',
          class: 'bg-orange-200',
        },
        {
          variant: 'filled',
          color: 'secondary',
          class: 'bg-zinc-200',
        },
        {
          variant: 'filled',
          color: 'info',
          class: 'bg-blue-200',
        },
        {
          variant: 'filled',
          color: 'success',
          class: 'bg-green-200',
        },
        {
          variant: 'filled',
          color: 'warning',
          class: 'bg-amber-200',
        },
        {
          variant: 'filled',
          color: 'error',
          class: 'bg-red-200',
        },
        {
          variant: 'filled',
          isError: true,
          class: 'bg-red-200',
        },
      ],
      defaultVariants: {
        variant: 'outlined',
        color: 'secondary',
        size: 'medium',
      },
    }),
    dropDown: cva('w-full flex items-center justify-between cursor-pointer'),
    selected: cva('w-full'),
    menuList: cva('flex flex-col mt-1.5 p-1 gap-0.5 absolute bg-white w-full'),
    menuItem: cva('cursor-pointer p-1.5 rounded-lg hover:bg-gray-100'),
    helperText: cva('text-sm m-1.5', {
      variants: {
        isError: {
          true: 'text-red-400',
          false: 'text-gray-400',
        },
      },
    }),
  }
}
