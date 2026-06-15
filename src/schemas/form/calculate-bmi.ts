import { HeightEnum, WeightEnum } from '@enums'
import { z } from 'zod'

export const calculateBmiFormSchema = z.object({
  age: z.string({
    error: 'Age is required',
  }),
  weight: z.string({
    error: 'Weight is required',
  }),
  weightUnit: z.enum(WeightEnum).optional(),
  height: z.string({
    error: 'Height is required',
  }),
  heightUnit: z.enum(HeightEnum).optional(),
})

export type CalculateBmiFormValues = z.infer<typeof calculateBmiFormSchema>
