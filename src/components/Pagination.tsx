import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled, { css } from 'styled-components'

import Chip from './Chip'
import Icon from './icon/Icon'

const DISPLAY_PAGE_COUNT = 5
const HALF = Math.floor(DISPLAY_PAGE_COUNT / 2)

const getDisplayPageNumbers = (
  totalPage: number,
  currentPage: number
): [number, number] => {
  let startIndex: number
  let endIndex: number

  if (totalPage <= DISPLAY_PAGE_COUNT) {
    startIndex = 0
    endIndex = DISPLAY_PAGE_COUNT
  } else {
    if (currentPage <= HALF) {
      startIndex = 0
      endIndex = DISPLAY_PAGE_COUNT
    } else if (currentPage > totalPage - HALF) {
      startIndex = totalPage - DISPLAY_PAGE_COUNT
      endIndex = totalPage
    } else {
      startIndex = totalPage + HALF - DISPLAY_PAGE_COUNT
      endIndex = currentPage + HALF
    }
  }

  return [startIndex, endIndex]
}

type Props = {
  totalPage: number
  currentPage: number
  pageQueryKey: string
}

const Pagination = ({ totalPage, currentPage, pageQueryKey }: Props) => {
  const router = useRouter()
  const [start, end] = getDisplayPageNumbers(totalPage, currentPage)
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1).slice(
    start,
    end
  )

  if (totalPage === 1) return null

  return (
    <Container>
      <Link
        href={{
          query: {
            ...router.query,
            [pageQueryKey]: 1,
          },
        }}
      >
        <IconWrapper $dimmed={currentPage === 1} $isleftType>
          <Icon type="DoubleArrowRight" stroke="grey500" />
        </IconWrapper>
      </Link>

      <Link
        href={{
          query: {
            ...router.query,
            [pageQueryKey]: currentPage - 1,
          },
        }}
      >
        <IconWrapper $dimmed={currentPage === 1} $isleftType>
          <Icon type="ArrowRight" stroke="grey500" />
        </IconWrapper>
      </Link>
      {pages.map((page) => (
        <Link
          key={page}
          href={{ query: { ...router.query, [pageQueryKey]: page } }}
        >
          <Page $active={page === currentPage}>{page}</Page>
        </Link>
      ))}
      <Link
        href={{
          query: {
            ...router.query,
            [pageQueryKey]: currentPage + 1,
          },
        }}
      >
        <IconWrapper $dimmed={totalPage === currentPage}>
          <Icon type="ArrowRight" stroke="grey500" />
        </IconWrapper>
      </Link>

      <Link
        href={{
          query: {
            ...router.query,
            [pageQueryKey]: totalPage,
          },
        }}
      >
        <IconWrapper $dimmed={totalPage === currentPage}>
          <Icon type="DoubleArrowRight" stroke="grey500" />
        </IconWrapper>
      </Link>
    </Container>
  )
}

export default Pagination

const Container = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 30px 0;
`

const Page = styled(Chip)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 10px;
  border-radius: 4px;
  ${({ theme }) => theme.font.subtitle_3};

  ${({ $active, theme }) =>
    $active
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

const IconWrapper = styled.div<{ $isleftType?: boolean; $dimmed: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 0 15px;

  ${({ $isleftType }) =>
    $isleftType &&
    css`
      transform: rotate(180deg);
    `}

  ${({ $dimmed, theme }) =>
    $dimmed
      ? css`
          cursor: default;
          pointer-events: none;
          > svg {
            stroke: ${theme.color.grey300};
          }
        `
      : css`
          cursor: pointer;
        `}
`
