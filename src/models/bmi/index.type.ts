import { BmiStatusEnum, GenderEnum, HeightEnum, WeightEnum } from '@enums'
import { IBase } from '@models/base/index.type'

export interface IBmi extends IBase {
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
