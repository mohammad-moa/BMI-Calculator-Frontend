import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// schemas
import { calculateBmiFormSchema, CalculateBmiFormValues } from '@schemas'
// apis
import { useCreateBmi } from '@apis'
// models
import { Bmi } from '@models'
// enums
import { GenderEnum, HeightEnum, WeightEnum } from '@enums'
// utils
import { convertHeightToCentimeter, convertWeightToKilogram, generateServerError } from '@utils'
// hooks
import { useToast } from '@hooks'

export type Units = Pick<CalculateBmiFormValues, 'weightUnit' | 'heightUnit'>

export const useData = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [bmi, setBmi] = useState<Bmi>(new Bmi())
  const { toast } = useToast()

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

  const createBmi = useCreateBmi()

  /* -------------------------------- Handlers -------------------------------- */

  const handleSubmitFinish = () => {
    const weight = convertWeightToKilogram(watch('weight'), watch('weightUnit'))
    const height = convertHeightToCentimeter(watch('height'), watch('heightUnit')) / 100
    const bmi = weight / (height * height)
    const genderFactor = watch('gender') === GenderEnum.MALE ? 1 : 0
    const bodyFat = 1.2 * bmi + 0.23 * watch('age') - 10.8 * genderFactor - 5.4
    setBmi(
      new Bmi({
        ...watch(),
        bmi: parseFloat(bmi.toFixed(2)),
        bodyFat: parseFloat(bodyFat.toFixed(2)),
        status: Bmi.generateBmiStatus(bmi),
      })
    )
    createBmi.mutate(
      {
        data: watch(),
      },
      {
        onError: (error) => {
          toast({
            message: generateServerError(error),
            color: 'error',
          })
        },
      }
    )
    setIsOpenDrawer(true)
  }

  return {
    isOpenDrawer,
    setIsOpenDrawer,
    bmi,
    handleSubmit,
    control,
    watch,
    setFormValue,
    errors,
    handleSubmitFinish,
  }
}
