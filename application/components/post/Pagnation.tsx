import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const MAX_DISPLAY_COUNT = 5
const HALF = MAX_DISPLAY_COUNT / 2
const FIRST_RIGHT_NUMBER = Math.ceil(HALF)
const LAST_LEFT_NUMBER = HALF % 2 === 0 ? HALF - 1 : Math.floor(HALF)

type Props = {
  totalPages: number
  currentPageNumber: number
}
//@todo refactoring pagination
const Pagination = ({ currentPageNumber, totalPages }: Props) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [pageNav, setPageNav] = useState(1)

  const clickPageNumber = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber - 1)

      if (
        pageNumber > FIRST_RIGHT_NUMBER ||
        (pageNumber <= FIRST_RIGHT_NUMBER && pageNav !== 1)
      ) {
        const gap = pageNumber - (pageNav + LAST_LEFT_NUMBER)

        if (pageNav + gap < 1) {
          setPageNav(1)
        } else {
          if (
            pageNav >= totalPages - (MAX_DISPLAY_COUNT - 1) &&
            pageNumber > totalPages - FIRST_RIGHT_NUMBER
          )
            return
          setPageNav((prev) => prev + gap)
        }
      }
    },
    [pageNav, totalPages]
  )

  useEffect(() => {
    clickPageNumber(currentPageNumber)
  }, [currentPageNumber, clickPageNumber])

  const setPageNumberInUrl = (pageNumber: number) => {
    router.push({ ...router, query: { page: pageNumber } })
  }

  if (!totalPages) return <></>

  return (
    <PaginationWrapper>
      <PrevButton
        onClick={() => setPageNumberInUrl(currentPageNumber - 1)}
        $dimmed={currentPageNumber <= 1}
      >
        {`<`}
      </PrevButton>
      <PageNumbers>
        {[...Array(totalPages)].map((_, i) => {
          const pageNumber = i + 1
          if (
            pageNumber > pageNav - 1 &&
            pageNumber < MAX_DISPLAY_COUNT + pageNav
          ) {
            return (
              <Link
                href={{ query: { page: pageNumber } }}
                key={`page_number_${i}`}
                passHref
              >
                <PageNumberAtag $active={currentPage === i}>
                  <PageNumber>{pageNumber}</PageNumber>
                </PageNumberAtag>
              </Link>
            )
          }
        })}
      </PageNumbers>
      <NextButton
        onClick={() => setPageNumberInUrl(currentPageNumber + 1)}
        $dimmed={currentPageNumber >= totalPages}
      >
        {`>`}
      </NextButton>
    </PaginationWrapper>
  )
}

export default Pagination

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin: 20px 0px;
`

const BUTTON_SIZE = '32px'

const Button = styled.button<{ $dimmed: boolean }>`
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.color.brown};
  ${({ theme }) => theme.font.body_1};

  ${({ theme, $dimmed }) =>
    $dimmed &&
    css`
      background-color: ${theme.color.lightGray};
      pointer-events: none;
    `}
`

const PrevButton = styled(Button)``

const NextButton = styled(Button)``

const X_GAP = '10px'

const PageNumbers = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: ${X_GAP};
  margin: 0 ${X_GAP};
`

const PageNumberAtag = styled.a<{ $active: boolean }>`
  ${({ theme, $active }) =>
    $active &&
    css`
      ${PageNumber} {
        ${theme.font.subtitle_4};
      }
      cursor: default;
      pointer-events: none;
    `}
`

const PageNumber = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.font.body_1};
`
