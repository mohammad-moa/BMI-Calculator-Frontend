import { BmiStatusEnum, GenderEnum, HeightEnum, WeightEnum } from '@enums'
import { IBmi } from './index.type'
import { capitalizeString } from '@utils/converter'

export class Bmi {
  protected props: IBmi = {}

  constructor(data?: IBmi) {
    if (data) {
      this.props = data
    }
  }

  getGender(): GenderEnum {
    return this.props.gender || GenderEnum.MALE
  }

  getAge(): number {
    return this.props.age || 0
  }

  getWeight(): number {
    return this.props.weight || 0
  }

  getWeightUnit(): WeightEnum {
    return this.props.weightUnit || WeightEnum.KG
  }

  getHeight(): number {
    return this.props.height || 0
  }

  getHeightUnit(): HeightEnum {
    return this.props.heightUnit || HeightEnum.CM
  }

  getBmi(): number {
    return this.props.bmi || 0
  }

  getBodyFat(): number {
    return this.props.bodyFat || 0
  }

  getStatus(): BmiStatusEnum {
    return this.props.status || BmiStatusEnum.NORMAL
  }

  getUserId(): string {
    return this.props.userId || ''
  }

  /* --------------------------------- Display -------------------------------- */

  getGenderDisplay(): string {
    return capitalizeString(this.getGender())
  }

  getWeightUnitDisplay(): string {
    return capitalizeString(this.getWeightUnit())
  }

  getHeightUnitDisplay(): string {
    return capitalizeString(this.getHeightUnit())
  }

  getStatusDisplay(): string {
    return capitalizeString(this.getStatus())
  }

  /* --------------------------------- Static --------------------------------- */

  static generateBmiStatus(bmi: number): BmiStatusEnum {
    if (bmi < 18.5) return BmiStatusEnum.UNDER_WEIGHT
    if (bmi < 25) return BmiStatusEnum.NORMAL
    if (bmi < 30) return BmiStatusEnum.OVER_WEIGHT
    return BmiStatusEnum.OBESE
  }
}
