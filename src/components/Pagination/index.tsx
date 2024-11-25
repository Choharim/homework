import Link from 'next/link'

import Icon from '../Icon'
import PageController from './PageController'

import Flex from '../Flex'

import * as style from './index.css'
import { combineClassName } from '@/styles/mixin'
import Typo from '../Typo'

const DISPLAY_PAGE_COUNT = 5
const HALF = Math.floor(DISPLAY_PAGE_COUNT / 2)

const getDisplayPageNumbers = (
  total: PaginationProps['total'],
  activePage: PaginationProps['activePage']
): [number, number] => {
  let startIndex: number
  let endIndex: number

  if (activePage <= HALF) {
    startIndex = 0
    endIndex = DISPLAY_PAGE_COUNT
  } else if (activePage > total - HALF) {
    startIndex = total - DISPLAY_PAGE_COUNT
    endIndex = total
  } else {
    startIndex = activePage + HALF - DISPLAY_PAGE_COUNT
    endIndex = activePage + HALF
  }

  return [startIndex, endIndex]
}

export interface PaginationProps {
  total: number
  activePage: number
  routerQueryKey: string
}

const Pagination = ({ total, activePage, routerQueryKey }: PaginationProps) => {
  const [start, end] = getDisplayPageNumbers(total, activePage)
  const pages = Array.from({ length: total }, (_, i) => i + 1).slice(start, end)

  if (total === 1) return null

  return (
    <Flex align="center" gap="8px" className={style.wrapper}>
      <PageController
        routerQueryKey={routerQueryKey}
        value={1}
        disabled={activePage === 1}
        className={style.pageController}
      >
        <Icon
          className={combineClassName(style.icon, style.iconRotate)}
          type="DoubleArrowRight"
          color="grey500"
        />
      </PageController>
      <PageController
        routerQueryKey={routerQueryKey}
        value={activePage - 1}
        disabled={activePage === 1}
        className={style.pageController}
      >
        <Icon
          className={combineClassName(style.icon, style.iconRotate)}
          type="ArrowRight"
          color="grey500"
        />
      </PageController>

      {pages.map((page) => (
        <Link
          className={style.page}
          data-active={page === activePage}
          key={page}
          href={{ query: { [routerQueryKey]: page } }}
        >
          <Typo variety="body_1" color="inherit">
            {page}
          </Typo>
        </Link>
      ))}

      <PageController
        routerQueryKey={routerQueryKey}
        value={activePage + 1}
        disabled={total === activePage}
        className={style.pageController}
      >
        <Icon type="ArrowRight" color="grey500" className={style.icon} />
      </PageController>

      <PageController
        routerQueryKey={routerQueryKey}
        value={total}
        disabled={total === activePage}
        className={style.pageController}
      >
        <Icon type="DoubleArrowRight" color="grey500" className={style.icon} />
      </PageController>
    </Flex>
  )
}

export default Pagination
