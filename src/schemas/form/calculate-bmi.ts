import { z } from 'zod'
import { GenderEnum, HeightEnum, WeightEnum } from '@enums'

export const calculateBmiFormSchema = z.object({
  gender: z.enum(GenderEnum),
  age: z.number('Age is required'),
  weight: z.number('Weight is required'),
  weightUnit: z.enum(WeightEnum),
  height: z.number('Height is required'),
  heightUnit: z.enum(HeightEnum),
})

export type CalculateBmiFormValues = z.infer<typeof calculateBmiFormSchema>
