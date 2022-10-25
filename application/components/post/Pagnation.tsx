import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const MAX_DISPLAY_COUNT = 5
const STANDARD = Math.floor(MAX_DISPLAY_COUNT / 2) + 1

type Props = {
  totalPages: number
  currentPageNumber: number
}
const Pagination = ({ currentPageNumber, totalPages }: Props) => {
  const router = useRouter()
  const { pathname, query } = router
  const [firstDisplayPagination, setFirstDisplayPagination] = useState(1)

  const clickPageNumber = useCallback(
    (pageNumber: number) => {
      if (pageNumber <= STANDARD || totalPages - STANDARD + 1 <= pageNumber)
        return

      setFirstDisplayPagination(pageNumber - STANDARD + 1)
    },
    [totalPages]
  )

  useEffect(() => {
    clickPageNumber(currentPageNumber)
  }, [currentPageNumber, clickPageNumber])

  const setPageNumberInUrl = (pageNumber: number) => {
    router.push({ pathname, query: { ...query, page: pageNumber } })
  }

  if (!totalPages) return <></>

  return (
    <PaginationWrapper>
      <PrevButton
        onClick={() => setPageNumberInUrl(currentPageNumber - 1)}
        disabled={currentPageNumber <= 1}
      >
        &#xE000;
      </PrevButton>
      <PageNumbers>
        {[...Array(totalPages)].map((_, i) => {
          const pageNumber = i + 1
          if (
            pageNumber >= firstDisplayPagination &&
            pageNumber < MAX_DISPLAY_COUNT + firstDisplayPagination
          ) {
            return (
              <Link
                href={{ query: { ...query, page: pageNumber } }}
                key={`page_number_${i}`}
                passHref
              >
                <PageNumberAtag $active={currentPageNumber === pageNumber}>
                  <PageNumber>{pageNumber}</PageNumber>
                </PageNumberAtag>
              </Link>
            )
          }
        })}
      </PageNumbers>
      <NextButton
        onClick={() => setPageNumberInUrl(currentPageNumber + 1)}
        disabled={currentPageNumber >= totalPages}
      >
        &#xE001;
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

const Button = styled.button<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  border: none;
  background-color: transparent;
  ${({ theme }) => theme.font.body_1};

  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.color.gray};
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
        background-color: ${theme.color.darkPink};
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
  border-radius: 2px;

  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body_1};
`
