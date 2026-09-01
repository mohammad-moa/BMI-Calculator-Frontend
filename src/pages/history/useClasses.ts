import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex flex-col h-screen my-5 w-full'),
    container: cva(''),
    link: cva('block w-max'),
    back: cva('p-2 pr-4 pl-2 mb-6'),
    titleContainer: cva('flex items-center justify-between'),
    title: cva('text-5xl font-black'),
    queryContainer: cva('flex items-center justify-center gap-3'),
    filterContainer: cva('position-relative'),
    filterIcon: cva('cursor-pointer bg-gray-300 p-3 rounded-lg'),
    popover: cva(''),
    content: cva('mt-8 flex flex-col flex-1 justify-between'),
  }
}
