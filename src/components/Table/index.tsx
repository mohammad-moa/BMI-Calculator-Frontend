import { memo } from 'react'
// utils
import { makeClass } from '@utils'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

export type TableColumn<T> = {
  id: string
  header: React.ReactNode
  render: (row: T) => React.ReactNode
}

type TableProps<T> = {
  rows: T[]
  columns: TableColumn<T>[]
  striped?: boolean
  rootClassName?: string
}

export const TableComponent = <T,>({
  rows,
  columns,
  striped = false,
  rootClassName,
}: TableProps<T>) => {
  const classes = useClasses()
  const { TX } = useText()

  const renderNotFound = () => {
    return <div className={classes.notFound()}>{TX('NOT_DATA_FOUND')}</div>
  }

  const renderHeader = () => {
    return (
      <div className={classes.header()}>
        {columns.map((column) => (
          <span key={column.id}>{column.header}</span>
        ))}
      </div>
    )
  }

  const renderRows = () => {
    if (rows.length <= 0) return renderNotFound()
    return (
      <div className={classes.rowContainer()}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={classes.row({
              striped,
            })}
          >
            {columns.map((column) => (
              <span key={column.id}>{column.render(row)}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={makeClass(classes.table(), rootClassName)}>
      {renderHeader()}
      {renderRows()}
    </div>
  )
}

export const Table = memo(TableComponent) as typeof TableComponent
