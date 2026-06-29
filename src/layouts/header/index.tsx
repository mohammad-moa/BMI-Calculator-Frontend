import { NavLink } from 'react-router'
// constants
import { HISTORY_ROUTE } from '@constants/routes'
// icons
import { History } from '@icons'
// utils
import { makeClass } from '@utils'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
  const classes = useClasses()
  const { TX } = useText()

  return (
    <div className={classes.root()}>
      <h1 className={classes.title()}>
        IM<strong className={classes.subTitle()}>FIT</strong>
      </h1>
      <div>
        <NavLink
          to={HISTORY_ROUTE}
          className={({ isActive }) => makeClass(classes.link(), isActive && classes.activeLink())}
        >
          <History /> {TX('HISTORY')}
        </NavLink>
      </div>
    </div>
  )
}
