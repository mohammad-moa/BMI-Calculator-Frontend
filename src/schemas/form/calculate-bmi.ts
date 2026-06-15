import { z } from 'zod'

export const calculateBmiFormSchema = z.object({
  age: z.string({
    error: 'Required',
  }),
  weight: z.string(),
  height: z.string(),
})

export type CalculateBmiFormValues = z.infer<typeof calculateBmiFormSchema>
