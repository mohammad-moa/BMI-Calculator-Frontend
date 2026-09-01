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
    filterContainer: cva('relative'),
    filterIcon: cva('cursor-pointer bg-slate-300 p-3 rounded-lg'),
    popover: cva(
      'bg-white shadow-lg shadow-slate-300/50 p-5 w-[300px] rounded-lg mt-1.5 absolute right-0'
    ),
    popoverTitle: cva('font-bold text-xl mb-5'),
    content: cva('mt-8 flex flex-col flex-1 justify-between'),
  }
}
