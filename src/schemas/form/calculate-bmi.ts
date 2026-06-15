import { HeightEnum, WeightEnum } from '@enums'
import { z } from 'zod'

export const calculateBmiFormSchema = z.object({
  age: z.string('Age is required'),
  weight: z.string('Weight is required'),
  weightUnit: z.enum(WeightEnum).optional(),
  height: z.string('Height is required'),
  heightUnit: z.enum(HeightEnum).optional(),
})

export type CalculateBmiFormValues = z.infer<typeof calculateBmiFormSchema>
