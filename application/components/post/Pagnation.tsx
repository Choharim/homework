import Link from 'next/link'
import { useState } from 'react'
import styled, { css } from 'styled-components'

const totalPages = 240
const defaultCount = 9

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [pageNav, setPageNav] = useState(1)

  const clickPrevButton = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
    if (pageNav > 1) {
      setPageNav((prev) => prev - 1)
    }
  }

  const clickNextButton = () => {
    setCurrentPage((prev) => prev + 1)
    setPageNav((prev) => prev + 1)
  }

  const clickPageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber - 1)

    if (pageNumber > 5 || (pageNumber <= 5 && pageNav !== 1)) {
      const gap = pageNumber - (pageNav + 4)

      if (pageNav + gap < 1) {
        setPageNav(1)
      } else {
        if (
          pageNav >= totalPages - (defaultCount - 1) &&
          pageNumber > totalPages - 4
        )
          return
        setPageNav((prev) => prev + gap)
      }
    }
  }

  return (
    <>
      <div>{`현재 페이지 ${currentPage + 1}`}</div>
      <PaginationWrapper>
        {pageNav > 1 && <PrevButton onClick={clickPrevButton}>이전</PrevButton>}
        <PageNumbers>
          {[...Array(totalPages)].map((_, i) => {
            if (i + 1 > pageNav - 1 && i + 1 < defaultCount + pageNav) {
              return (
                <PageNumber
                  active={currentPage === i}
                  onClick={() => clickPageNumber(i + 1)}
                >
                  <Link href={`#${i + 1}`}>
                    <a>{i + 1}</a>
                  </Link>
                </PageNumber>
              )
            }
          })}
        </PageNumbers>
        {totalPages > pageNav + defaultCount - 1 && (
          <NextButton onClick={clickNextButton}>다음</NextButton>
        )}
      </PaginationWrapper>
    </>
  )
}

export default Pagination

const PaginationWrapper = styled.div`
  display: flex;
`

const PrevButton = styled.button``

const NextButton = styled.button``

const PageNumbers = styled.ul`
  display: flex;
  align-items: center;
`

const PageNumber = styled.li<{ active: boolean }>`
  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${theme.color.darkPink};
    `}
`
