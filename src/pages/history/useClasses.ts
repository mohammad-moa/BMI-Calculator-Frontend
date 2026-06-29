import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex flex-1'),
    container: cva('my-5 w-full'),
    back: cva('p-2 pr-4 pl-2 mb-6'),
    titleContainer: cva('flex items-center justify-between'),
    title: cva('text-5xl font-black'),
  }
}
