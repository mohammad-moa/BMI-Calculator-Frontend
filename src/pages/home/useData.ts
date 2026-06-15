import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// schemas
import { calculateBmiFormSchema, CalculateBmiFormValues } from '@schemas'
// enums
import { GenderEnum, HeightEnum, WeightEnum } from '@enums'
// utils
// import { convertHeightToCentimeter, convertWeightToKilogram } from '@utils/converter'

export type Units = Pick<CalculateBmiFormValues, 'weightUnit' | 'heightUnit'>

export const useData = () => {
  const {
    handleSubmit,
    control,
    watch,
    setValue: setFormValue,
    formState: { errors },
  } = useForm<CalculateBmiFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(calculateBmiFormSchema),
    defaultValues: {
      gender: GenderEnum.MALE,
      weightUnit: WeightEnum.KG,
      heightUnit: HeightEnum.CM,
    },
  })

  /* -------------------------------- Handlers -------------------------------- */

  const handleSubmitFinish = () => {
    // const weight = convertWeightToKilogram(parseFloat(watch('weight')), watch('weightUnit'))
    // const height = convertHeightToCentimeter(parseFloat(watch('height')), watch('heightUnit')) / 100
    // const bmi = weight / (height * height)
    // const genderFactor = watch('gender') === GenderEnum.MALE ? 1 : 0
    // const bodyFat = 1.2 * bmi + 0.23 * parseFloat(watch('age')) - 10.8 * genderFactor - 5.4
  }

  return {
    handleSubmit,
    control,
    watch,
    setFormValue,
    errors,
    handleSubmitFinish,
  }
}
