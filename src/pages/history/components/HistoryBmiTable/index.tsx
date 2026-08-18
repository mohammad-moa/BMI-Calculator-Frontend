import { memo } from 'react'
// components
import { Table, TableColumn } from '@components'
// models
import { Bmi } from '@models'
// hooks
import { useText } from '@hooks'

type HistoryBmiTableProps = {
  items: Bmi[]
  isLoading?: boolean
}

export const HistoryBmiTable: React.FC<HistoryBmiTableProps> = memo(
  ({ items = [], isLoading = false }) => {
    const { TX } = useText()

    const columns: TableColumn<Bmi>[] = [
      {
        id: 'gender',
        header: TX('HISTORY.GENDER'),
        render: (row) => row.getGenderDisplay(),
      },
      {
        id: 'age',
        header: TX('HISTORY.AGE'),
        render: (row) => row.getAge(),
      },
      {
        id: 'weight',
        header: TX('HISTORY.WEIGHT'),
        render: (row) => row.getWeightDisplay(),
      },
      {
        id: 'height',
        header: TX('HISTORY.HEIGHT'),
        render: (row) => row.getHeightDisplay(),
      },
      {
        id: 'bmi',
        header: TX('HISTORY.BMI'),
        render: (row) => row.getBmiDisplay(),
      },
      {
        id: 'body_fat',
        header: TX('HISTORY.BODY_FAT'),
        render: (row) => row.getBodyFatDisplay(),
      },
      {
        id: 'status',
        header: TX('HISTORY.STATUS'),
        render: (row) => row.getStatusDisplay(),
      },
      {
        id: 'notes',
        header: TX('HISTORY.NOTES'),
        render: (row) => row.getNotes() || '-',
      },
    ]

    return <Table rows={items} columns={columns} isLoading={isLoading} />
  }
)
