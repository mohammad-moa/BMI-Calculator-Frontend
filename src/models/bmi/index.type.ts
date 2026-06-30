import { BmiStatusEnum, GenderEnum, HeightEnum, WeightEnum } from '@enums'

export interface IBmi {
  gender?: GenderEnum
  age?: number
  weight?: number
  weightUnit?: WeightEnum
  height?: number
  heightUnit?: HeightEnum
  notes?: string
  bmi?: number
  bodyFat?: number
  status?: BmiStatusEnum
  userId?: string
}
