import { HeightEnum, WeightEnum } from '@enums'

export const convertWeightToKilogram = (value: number, unit: `${WeightEnum}`): number => {
  return {
    kg: value,
    lb: value * 0.45359237,
  }[unit]
}

export const convertHeightToCentimeter = (value: number, unit: `${HeightEnum}`): number => {
  return {
    cm: value,
    ft: value * 30.48,
  }[unit]
}

export const capitalizeString = (text: string) => {
  if (!text) return ''
  const splitTexts = text.replaceAll('_', ' ').split(' ')
  const convertText = splitTexts
    .map((splitText) => splitText.charAt(0).toUpperCase() + splitText.slice(1))
    .join(' ')
  return convertText
}
