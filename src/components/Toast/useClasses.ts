import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    toast: cva(
      'fixed z-50 flex flex-col justify-start gap-5 p-4 rounded-xl border bg-white shadow-xl shadow-gray-200 min-w-[320px] max-w-112.5',
      {
        variants: {
          position: {
            'top-right': 'top-4 right-4 m-auto',
            'top-left': 'top-4 left-4 m-auto',
            'top-center': 'top-4 left-1/2 -translate-x-1/2',
            'bottom-right': 'bottom-4 right-4 m-auto',
            'bottom-left': 'bottom-4 left-4 m-auto',
            'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
          },
          color: {
            primary: 'border-orange-200 bg-orange-50',
            secondary: 'border-zinc-200 bg-zinc-50',
            info: 'border-blue-200 bg-blue-50',
            success: 'border-green-200 bg-green-50',
            warning: 'border-amber-200 bg-amber-50',
            error: 'border-red-200 bg-red-50',
          },
        },
      }
    ),
    contentContainer: cva('flex items-start gap-2'),
    content: cva('flex flex-col flex-1 gap-0.5'),
    message: cva('font-medium text-base text-gray-900'),
    description: cva('text-sm text-zinc-500 mt-0.5'),
  }
}
