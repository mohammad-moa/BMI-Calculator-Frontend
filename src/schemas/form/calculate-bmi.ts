import { z } from 'zod'
import { GenderEnum, HeightEnum, WeightEnum } from '@enums'

export const calculateBmiFormSchema = z.object({
  gender: z.enum(GenderEnum),
  age: z.string('Age is required'),
  weight: z.string('Weight is required'),
  weightUnit: z.enum(WeightEnum),
  height: z.string('Height is required'),
  heightUnit: z.enum(HeightEnum),
})

export type CalculateBmiFormValues = z.infer<typeof calculateBmiFormSchema>
