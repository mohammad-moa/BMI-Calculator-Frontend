import { memo } from 'react'
// components
import { Button, ButtonProps } from '@components'
// utils
import { makeClass } from '@utils'
// locals
import { useClasses } from './useClasses'

export type PaginationProps = ButtonProps & {
  meta: any
  onPaginate?: (page: number) => void
  rootClassName?: string
}

export const Pagination: React.FC<PaginationProps> = memo(
  ({ meta, onPaginate = () => undefined, rootClassName, ...props }) => {
    const classes = useClasses()

    return (
      <div className={makeClass(classes.root(), rootClassName)}>
        <Button {...props} className={classes.button()}>
          1
        </Button>
      </div>
    )
  }
)
