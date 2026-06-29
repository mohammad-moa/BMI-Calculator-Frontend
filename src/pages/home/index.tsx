import { Controller } from 'react-hook-form'
// images
import BmiChart from '@assets/images/bmi-chart.png'
// icons
import { Flame, GenderFemale, GenderMale } from '@icons'
// components
import { Button, TextField } from '@components'
// enums
import { GenderEnum, HeightEnum, WeightEnum } from '@enums'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { Units, useData } from './useData'
import { ResultBmiDrawer } from './components'

type HomePageProps = {}

export const HomePage: React.FC<HomePageProps> = () => {
  const classes = useClasses()
  const { TX } = useText()
  const data = useData()

  const renderGender = () => {
    return (
      <div>
        <h4>{TX('HOME.GENDER')} *</h4>
        <div className={classes.cards()}>
          <span
            className={classes.card({
              selected: data.watch('gender') === GenderEnum.MALE,
            })}
            onClick={() => data.setFormValue('gender', GenderEnum.MALE)}
          >
            <GenderMale /> {TX('HOME.MALE')}
          </span>
          <span
            className={classes.card({
              selected: data.watch('gender') === GenderEnum.FEMALE,
            })}
            onClick={() => data.setFormValue('gender', GenderEnum.FEMALE)}
          >
            <GenderFemale /> {TX('HOME.FEMALE')}
          </span>
        </div>
      </div>
    )
  }

  const renderUnits = (key: keyof Units, unit: Units[keyof Units], text: string) => {
    return (
      <span
        className={classes.unit({
          selected: data.watch(key) === unit,
        })}
        onClick={() => data.setFormValue(key, unit)}
      >
        {text}
      </span>
    )
  }

  const renderForm = () => {
    return (
      <form className={classes.form()} onSubmit={data.handleSubmit(data.handleSubmitFinish)}>
        {renderGender()}
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
              onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
            />
          )}
        />
        <div className={classes.fieldContainer()}>
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
                  <div className={classes.units()}>
                    {renderUnits('weightUnit', WeightEnum.KG, TX('HOME.KG'))}
                    {renderUnits('weightUnit', WeightEnum.LB, TX('HOME.LB'))}
                  </div>
                }
                isError={!!data.errors.weight?.message}
                helperText={data.errors.weight?.message}
                onChange={(e) =>
                  field.onChange(e.target.value === '' ? '' : Number(e.target.value))
                }
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
                  <div className={classes.units()}>
                    {renderUnits('heightUnit', HeightEnum.CM, TX('HOME.CM'))}
                    {renderUnits('heightUnit', HeightEnum.FT, TX('HOME.FT'))}
                  </div>
                }
                isError={!!data.errors.height?.message}
                helperText={data.errors.height?.message}
                onChange={(e) =>
                  field.onChange(e.target.value === '' ? '' : Number(e.target.value))
                }
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
    <div className={classes.root()}>
      <div className={classes.formContainer()}>
        <div>
          <span className={classes.badge()}>
            <Flame /> {TX('HOME.STAY_FIT')}
          </span>
          <h1 className={classes.title()}>{TX('HOME.BMI_CALCULATOR')}</h1>
          <p className={classes.text()}>{TX('HOME.BMI_CALCULATOR_MESSAGE')}</p>
        </div>
        {renderForm()}
      </div>
      <div className={classes.image()}>
        <img src={BmiChart} alt='bmi-chart' />
      </div>
      <ResultBmiDrawer
        isOpen={data.isOpenDrawer}
        onClose={() => data.setIsOpenDrawer(false)}
        item={data.bmi}
      />
    </div>
  )
}
