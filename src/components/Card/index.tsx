import { memo } from 'react'
// components
import { ColorType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export type CardVariant = 'elevation' | 'outlined' | 'standard'

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant
  color?: ColorType
  rootClassName?: string
}

export const Card: React.FC<CardProps> = memo(
  ({ children, variant = 'elevation', color = 'primary', rootClassName, ...props }) => {
    const classes = useClasses()

    return (
      <div
        className={makeClass(
          classes.card({
            variant,
            color,
          }),
          rootClassName
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
