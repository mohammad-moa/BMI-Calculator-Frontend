// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => {
  const classes = useClasses()
  const { TX } = useText()

  return (
    <div className={classes.root()}>
      <p className={classes.copyright()}>{TX('FOOTER.COPYRIGHT')}</p>
    </div>
  )
}
