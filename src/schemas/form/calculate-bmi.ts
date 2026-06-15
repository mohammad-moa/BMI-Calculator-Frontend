import { z } from 'zod'

export const calculateBmiFormSchema = z.object({
  age: z.string({
    error: 'Age is required',
  }),
  weight: z.string({
    error: 'Weight is required',
  }),
  height: z.string({
    error: 'Height is required',
  }),
})

export type CalculateBmiFormValues = z.infer<typeof calculateBmiFormSchema>
