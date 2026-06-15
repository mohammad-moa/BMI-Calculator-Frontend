import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// schemas
import { calculateBmiFormSchema, CalculateBmiFormValues } from '@schemas'
// enums
import { HeightEnum, WeightEnum } from '@enums'

export type Units = {
  weight: WeightEnum
  height: HeightEnum
}

export const useData = () => {
  const [unitSelected, setUnitSelected] = useState<Units>({
    weight: WeightEnum.KG,
    height: HeightEnum.CM,
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CalculateBmiFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(calculateBmiFormSchema),
  })

  /* -------------------------------- Handlers -------------------------------- */

  const handleUnitSelected = useCallback(<K extends keyof Units>(key: K, value: Units[K]) => {
    setUnitSelected((prev) => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  const handleSubmitFinish = () => {}

  return { unitSelected, handleUnitSelected, handleSubmit, control, errors, handleSubmitFinish }
}
