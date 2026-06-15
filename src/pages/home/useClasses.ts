import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex flex-1 items-center justify-between gap-30'),
    badge: cva(
      'flex items-center justify-center gap-1 bg-red-100 text-red-700 pt-2.5 pb-2 px-4 mb-6 rounded-full w-max'
    ),
    title: cva('text-5xl font-black mb-5'),
    text: cva('text-md text-gray-500'),
    formContainer: cva('flex flex-col gap-15 w-1/3'),
    form: cva('flex flex-col gap-7'),
    cards: cva('flex items-center justify-between gap-1 bg-blue-100 p-1.5 rounded-2xl mt-1 w-max'),
    card: cva('cursor-pointer flex items-center gap-1.5 pt-2.5 pb-2 px-3.5 rounded-xl', {
      variants: {
        selected: {
          true: 'text-white bg-blue-500',
          false: 'text-slate-800',
        },
      },
    }),
    fieldContainer: cva('flex items-start gap-5'),
    units: cva('flex items-center gap-3 border-l border-l-gray-300 pl-3'),
    unit: cva('cursor-pointer', {
      variants: {
        selected: {
          true: 'text-slate-800',
          false: 'text-slate-300',
        },
      },
    }),
    image: cva('w-3/5'),
  }
}
