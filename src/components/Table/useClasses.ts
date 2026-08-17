import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    table: cva('mb-3'),
    notFound: cva('text-center pt-15 h-[30vh] text-lg font-semibold text-gray-500'),
    header: cva(
      'bg-gray-800 text-white font-bold text-sm flex items-center justify-between gap-6 px-3 py-2 rounded-lg'
    ),
    headerText: cva('flex-1'),
    rowContainer: cva('bg-gray-200 rounded-lg mt-1.5'),
    row: cva(
      'text-sm flex items-center justify-between gap-6 px-3 py-2 border-b border-b-gray-100 last:border-none last:rounded-b-lg',
      {
        variants: {
          striped: {
            true: 'even:bg-gray-300',
          },
        },
      }
    ),
    rowText: cva('flex-1'),
    loading: cva('bg-black/15 rounded-lg w-full h-3.5 my-1'),
  }
}
