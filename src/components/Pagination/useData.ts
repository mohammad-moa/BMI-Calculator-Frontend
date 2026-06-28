import { PaginationProps } from '.'

export const useData = ({ meta }: Pick<PaginationProps, 'meta'>) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const siblingCount = 2

    for (let i = 1; i <= meta.getTotalPages(); i++) {
      if (
        i === 1 ||
        i === meta.getTotalPages() ||
        (i >= meta.getCurrentPage() - siblingCount && i <= meta.getCurrentPage() + siblingCount)
      ) {
        pages.push(i)
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...')
      }
    }
    return pages
  }

  return { pageNumbers: getPageNumbers() }
}
