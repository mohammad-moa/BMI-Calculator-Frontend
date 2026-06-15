// images
import BmiChart from '@assets/images/bmi-chart.png'
// icons
import { Flame } from '@icons'
// components
import { Button, TextField } from '@components'
// enums
import { HeightEnum, WeightEnum } from '@enums'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { Units, useData } from './useData'
import { Controller } from 'react-hook-form'

type HomePageProps = {}

export const HomePage: React.FC<HomePageProps> = () => {
  const className = useClasses()
  const { TX } = useText()
  const data = useData()

  const renderUnits = (key: keyof Units, unit: Units[keyof Units], text: string) => {
    return (
      <span
        className={className.unit({
          selected: data.unitSelected[key] === unit,
        })}
        onClick={() => data.handleUnitSelected(key, unit)}
      >
        {text}
      </span>
    )
  }

  const renderForm = () => {
    return (
      <form className={className.form()} onSubmit={data.handleSubmit(data.handleSubmitFinish)}>
        <Controller
          control={data.control}
          name='age'
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              isRequired
              type='number'
              label={TX('HOME.AGE')}
              color='primary'
              isError={!!data.errors.age?.message}
              helperText={data.errors.age?.message}
            />
          )}
        />
        <div className={className.fieldContainer()}>
          <Controller
            control={data.control}
            name='weight'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                isRequired
                type='number'
                label={TX('HOME.WEIGHT')}
                color='primary'
                endIcon={
                  <div className={className.units()}>
                    {renderUnits('weight', WeightEnum.KG, TX('HOME.KG'))}
                    {renderUnits('weight', WeightEnum.LG, TX('HOME.LB'))}
                  </div>
                }
                isError={!!data.errors.weight?.message}
                helperText={data.errors.weight?.message}
              />
            )}
          />
          <Controller
            control={data.control}
            name='height'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                isRequired
                type='number'
                label={TX('HOME.HEIGHT')}
                color='primary'
                endIcon={
                  <div className={className.units()}>
                    {renderUnits('height', HeightEnum.CM, TX('HOME.CM'))}
                    {renderUnits('height', HeightEnum.FT, TX('HOME.FT'))}
                  </div>
                }
                isError={!!data.errors.height?.message}
                helperText={data.errors.height?.message}
              />
            )}
          />
        </div>
        <Button type='submit' size='large'>
          {TX('HOME.CALCULATE')}
        </Button>
      </form>
    )
  }

  return (
    <div className={className.root()}>
      <div className={className.formContainer()}>
        <div>
          <span className={className.badge()}>
            <Flame /> {TX('HOME.STAY_FIT')}
          </span>
          <h1 className={className.title()}>{TX('HOME.BMI_CALCULATOR')}</h1>
          <p className={className.text()}>{TX('HOME.BMI_CALCULATOR_MESSAGE')}</p>
        </div>
        {renderForm()}
      </div>
      <div className={className.image()}>
        <img src={BmiChart} alt='bmi-chart' />
      </div>
    </div>
  )
}
