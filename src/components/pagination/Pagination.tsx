import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Chip from '../Chip'
import Icon from '../icon'
import PageLink from './PageLink'

import MEDIA from '@/styles/constants/media'
import FONT from '@/styles/constants/font'
import { rotateHalf } from '@/styles/mixin'
import Flex from '../flex'

const DISPLAY_PAGE_COUNT = 5
const HALF = Math.floor(DISPLAY_PAGE_COUNT / 2)

const getDisplayPageNumbers = (
  totalPage: number,
  currentPage: number
): [number, number] => {
  let startIndex: number
  let endIndex: number

  if (currentPage <= HALF) {
    startIndex = 0
    endIndex = DISPLAY_PAGE_COUNT
  } else if (currentPage > totalPage - HALF) {
    startIndex = totalPage - DISPLAY_PAGE_COUNT
    endIndex = totalPage
  } else {
    startIndex = currentPage + HALF - DISPLAY_PAGE_COUNT
    endIndex = currentPage + HALF
  }

  return [startIndex, endIndex]
}

export type PaginationProps = {
  totalPage: number
  currentPage: number
  pageQueryKey: string
}

const Pagination = ({
  totalPage,
  currentPage,
  pageQueryKey,
}: PaginationProps) => {
  const router = useRouter()
  const [start, end] = getDisplayPageNumbers(totalPage, currentPage)
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1).slice(
    start,
    end
  )

  if (totalPage === 1) return null

  return (
    <Container align="center">
      <CustomPageLink
        isDisabled={currentPage === 1}
        pageQueryKey={pageQueryKey}
        pageQueryValue={1}
      >
        <CustomIcon css={rotateHalf} type="DoubleArrowRight" color="grey500" />
      </CustomPageLink>
      <CustomPageLink
        isDisabled={currentPage === 1}
        pageQueryKey={pageQueryKey}
        pageQueryValue={currentPage - 1}
      >
        <CustomIcon css={rotateHalf} type="ArrowRight" color="grey500" />
      </CustomPageLink>

      {pages.map((page) => (
        <Link
          key={page}
          href={{ query: { ...router.query, [pageQueryKey]: page } }}
        >
          <Page isActive={page === currentPage}>{page}</Page>
        </Link>
      ))}

      <CustomPageLink
        isDisabled={totalPage === currentPage}
        pageQueryKey={pageQueryKey}
        pageQueryValue={currentPage + 1}
      >
        <CustomIcon type="ArrowRight" color="grey500" />
      </CustomPageLink>

      <CustomPageLink
        isDisabled={totalPage === currentPage}
        pageQueryKey={pageQueryKey}
        pageQueryValue={totalPage}
      >
        <CustomIcon type="DoubleArrowRight" color="grey500" />
      </CustomPageLink>
    </Container>
  )
}

export default Pagination

const Container = styled(Flex)`
  margin: 0 auto;
  padding: 30px 0;
`

const Page = styled(Chip)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 5px;
  border-radius: 4px;
  ${FONT.title_3};

  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.color.primary300};
          color: ${theme.color.white};
          cursor: default;
          pointer-events: none;
        `
      : css`
          color: ${theme.color.primary400};
          cursor: pointer;
        `}
`

const CustomPageLink = styled(PageLink)<{ isDisabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isDisabled, theme }) =>
    isDisabled
      ? css`
          cursor: default;
          pointer-events: none;
          ${CustomIcon} {
            color: ${theme.color.grey300};
          }
        `
      : css`
          cursor: pointer;
        `}
`

const CustomIcon = styled(Icon)`
  padding: 5px;
  width: 30px;
  cursor: pointer;

  ${MEDIA.tablet} {
    padding: 5px;
    width: 25px;
  }
`
