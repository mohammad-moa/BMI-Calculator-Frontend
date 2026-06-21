import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    content: cva('flex flex-col justify-center items-center gap-10'),
    card: cva(
      '[&_span]:text-base [&_span]:text-gray-300 text-3xl font-black text-orange-500 flex flex-col items-center'
    ),
    bmi: cva(
      '[&_span]:text-lg [&_span]:text-gray-300 text-8xl font-black flex flex-col items-center'
    ),
    details: cva('flex flex-col items-center justify-center gap-6'),
    bodyFat: cva('[&_span]:font-medium font-bold text-blue-500'),
    message: cva('text-xl'),
  }
}
