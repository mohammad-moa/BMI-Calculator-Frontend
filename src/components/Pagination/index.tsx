import { memo } from 'react'
// components
import { Button, ButtonProps } from '@components'
// icons
import { ChevronLeft, ChevronRight } from '@icons'
// models
import { Meta } from '@models'
// utils
import { makeClass } from '@utils'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'

export type PaginationProps = ButtonProps & {
  meta: Meta
  onPaginate?: (page: number) => void
  rootClassName?: string
}

export const Pagination: React.FC<PaginationProps> = memo(
  ({ meta, onPaginate = () => undefined, rootClassName, ...props }) => {
    const classes = useClasses()
    const data = useData({ meta })

    return (
      <div className={makeClass(classes.root(), rootClassName)}>
        <Button
          {...props}
          className={classes.iconButton()}
          disabled={meta.getCurrentPage() === 1 || props.disabled}
          onClick={() => onPaginate(meta.getCurrentPage() - 1)}
        >
          <ChevronLeft />
        </Button>
        {data.pageNumbers.map((page, index) => {
          if (typeof page === 'string') {
            return (
              <span key={`ellipsis-${index}`} className='text-gray-500'>
                ...
              </span>
            )
          }
          return (
            <Button
              {...props}
              key={page}
              className={classes.button()}
              variant={meta.getCurrentPage() === page ? 'contained' : 'text'}
              onClick={() => (meta.getCurrentPage() !== page ? onPaginate(page) : undefined)}
            >
              {page}
            </Button>
          )
        })}
        <Button
          {...props}
          className={classes.iconButton()}
          disabled={meta.getCurrentPage() === meta.getTotalPages() || props.disabled}
          onClick={() => onPaginate(meta.getCurrentPage() + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    )
  }
)
