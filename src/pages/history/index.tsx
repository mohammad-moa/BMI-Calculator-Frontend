import { Link } from 'react-router'
// components
import { Button, Pagination, Select, TextField, ToggleButtonGroup } from '@components'
// icons
import { ChevronLeft, Filter, LayoutGrid, LayoutList, Search } from '@icons'
// constants
import { MAIN_ROUTE } from '@constants/routes'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { LayoutType, useData } from './useData'
import { HistoryBmiTable } from './components'

type HistoryPageProps = {}

export const HistoryPage: React.FC<HistoryPageProps> = () => {
  const classes = useClasses()
  const { TX } = useText()
  const data = useData()

  const renderFilter = () => {
    return (
      <div className={classes.filterContainer()}>
        {/* <div className={classes.filterIcon()} onClick={data.handleTogglePopover}>
          <Filter />
        </div> */}
        {data.isOpenPopover && (
          <div ref={data.popoverRef} className={classes.popover()}>
            <h3 className={classes.popoverTitle()}>{TX('FILTER')}</h3>
            <ToggleButtonGroup
              fullWidth
              options={[
                { value: 'List', startIcon: <LayoutList /> },
                { value: 'Grid', startIcon: <LayoutGrid /> },
              ]}
              value={data.layoutType}
              onChange={(value) => data.setLayoutType(value as LayoutType)}
            />
            <Select
              fullWidth
              rootClassName='mt-3.5'
              label={TX('STATUS')}
              options={data.statusOptions}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={classes.root()}>
      <Link to={MAIN_ROUTE} className={classes.link()}>
        <Button color='info' startIcon={<ChevronLeft />} className={classes.back()}>
          {TX('BACK')}
        </Button>
      </Link>
      <div className={classes.titleContainer()}>
        <h4 className={classes.title()}>{TX('HISTORY')}</h4>
        <div className={classes.queryContainer()}>
          <TextField
            fullWidth
            startIcon={<Search />}
            value={data.searchTerm || ''}
            onChange={(e) => data.handleSearch(e.target.value)}
          />
          {renderFilter()}
        </div>
      </div>
      <div className={classes.content()}>
        <HistoryBmiTable items={data.historyList.data.getItems()} isLoading={data.isLoading} />
        <Pagination
          meta={data.historyList.data.getMeta()}
          onPaginate={(page) => data.handleChangeQueryUrl({ page })}
          disabled={data.isLoading}
          className='mt-auto'
        />
      </div>
    </div>
  )
}
