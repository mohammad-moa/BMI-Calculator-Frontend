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
import { useText, useToast } from '@hooks'

export type Units = Pick<CalculateBmiFormValues, 'weightUnit' | 'heightUnit'>

export const useData = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [bmi, setBmi] = useState<Bmi>(new Bmi())
  const { TX } = useText()
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

  /* ---------------------------------- Apis ---------------------------------- */

  const createBmi = useCreateBmi()

  /* -------------------------------- Handlers -------------------------------- */

  const handleCalculateBmi = (values: CalculateBmiFormValues) => {
    const weight = convertWeightToKilogram(values.weight, values.weightUnit)
    const height = convertHeightToCentimeter(values.height, values.heightUnit) / 100
    const bmiValue = weight / (height * height)
    const genderFactor = values.gender === GenderEnum.MALE ? 1 : 0
    const bodyFat = 1.2 * bmiValue + 0.23 * values.age - 10.8 * genderFactor - 5.4
    setBmi(
      new Bmi({
        ...values,
        bmi: parseFloat(bmiValue.toFixed(2)),
        bodyFat: parseFloat(bodyFat.toFixed(2)),
        status: Bmi.generateBmiStatus(bmiValue),
      })
    )
  }

  const handleCreateBmiToServer = async (values: CalculateBmiFormValues) => {
    try {
      toast({
        message: TX('SYNCING'),
        color: 'info',
        autoCloseDuration: 0,
      })
      await createBmi.mutateAsync({ data: values })
      toast({
        message: TX('INFORMATION_WAS_SUCCESSFULLY'),
        color: 'success',
      })
    } catch (error) {
      toast({
        message: generateServerError(error),
        color: 'error',
        confirmLabel: TX('RETRY'),
        onConfirm: () => handleCreateBmiToServer(values),
      })
    }
  }

  const handleSubmitFinish = (values: CalculateBmiFormValues) => {
    handleCalculateBmi(values)
    setIsOpenDrawer(true)
    handleCreateBmiToServer(values)
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
