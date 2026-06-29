import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex items-center justify-between gap-4 py-10'),
    title: cva('text-3xl font-normal text-blue-300 tracking-widest'),
    subTitle: cva('font-black text-blue-700'),
    link: cva('flex items-center gap-1.5 [&_svg]:w-5 [&_svg]:h-5'),
    activeLink: cva('text-orange-500'),
  }
}
