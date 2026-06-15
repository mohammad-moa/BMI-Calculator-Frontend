import { useCallback, useState } from 'react'
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

  const handleUnitSelected = useCallback(<K extends keyof Units>(key: K, value: Units[K]) => {
    setUnitSelected((prev) => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  return { unitSelected, handleUnitSelected }
}
