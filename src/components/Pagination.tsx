import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled, { css } from 'styled-components'

import Chip from './Chip'

type Props = {
  totalPage: number
  currentPage: number
  pageQueryKey: string
}
const Pagination = ({ totalPage, currentPage, pageQueryKey }: Props) => {
  const router = useRouter()
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1)

  return (
    <Container>
      {pages.map((page) => (
        <Link
          key={page}
          href={{ query: { ...router.query, [pageQueryKey]: page } }}
        >
          <Page $active={page === currentPage}>{page}</Page>
        </Link>
      ))}
    </Container>
  )
}

export default Pagination

const Container = styled.ul`
  display: flex;
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
