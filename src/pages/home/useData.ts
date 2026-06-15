import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// schemas
import { calculateBmiFormSchema, CalculateBmiFormValues } from '@schemas'
// enums
import { GenderEnum, HeightEnum, WeightEnum } from '@enums'

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
    console.log(watch())
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
