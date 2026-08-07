import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    table: cva('mb-3'),
    header: cva(
      'bg-gray-800 text-white font-bold text-sm flex items-center justify-between px-3 py-2 rounded-lg'
    ),
    rowContainer: cva('bg-gray-200 rounded-lg mt-1.5'),
    row: cva(
      'text-sm flex items-center justify-between px-3 py-2 border-b border-b-gray-100 last:border-none last:rounded-b-lg',
      {
        variants: {
          striped: {
            true: 'even:bg-gray-300',
          },
        },
      }
    ),
  }
}
