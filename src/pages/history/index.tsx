// locals
import { useClasses } from './useClasses'

type HistoryPageProps = {}

export const HistoryPage: React.FC<HistoryPageProps> = () => {
  const className = useClasses()

  return <div className={className.root()}>History Page</div>
}
