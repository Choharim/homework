import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Flex from '@/components/flex'

import { HEADERS_OF_CONTENTS } from '@/application/post/constant'
import { HeadersOfContents } from '@/application/post/type'
import { setTOCId } from '@/application/post/utils/tableOfContents'
import { convertHEXToRGB } from '@/utils/string'
import Z_INDEX from '@/styles/constants/zIndex'
import FONT from '@/styles/constants/font'
import { NAVBAR_HEIGHT } from '@/components/layout/Navbar'

export const TOC_WIDTH_IN_PC = 280

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: `-${NAVBAR_HEIGHT}px`,
}

const TOC = () => {
  const [headingElements, setHeadingElements] = useState<Element[]>([])
  const [isHighlightId, setisHighlightId] = useState<string>('')
  const entriesRef = useRef<Record<string, IntersectionObserverEntry>>({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entriesRef.current[entry.target.id] = entry
      })

      const isHighlightEntry = Object.values(entriesRef.current).find(
        (entry) => entry.isIntersecting
      )

      if (isHighlightEntry) setisHighlightId(isHighlightEntry.target.id)
    }, OBSERVER_OPTIONS)

    const headingElements = Array.from(
      document.querySelectorAll(HEADERS_OF_CONTENTS.join(','))
    )
    setTOCId(headingElements)
    setHeadingElements(headingElements)

    headingElements.forEach((header) => {
      observer.observe(header)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToTargetHeading = (event: MouseEvent<HTMLLIElement>) => {
    const target = headingElements.find(
      (heading) => heading.id === event.currentTarget.id
    )

    if (target?.getBoundingClientRect().top) {
      window.scrollTo({
        top:
          target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT,
      })

      setTimeout(() => setisHighlightId(target.id), 100)
    }
  }

  if (!headingElements.length) <></>

  return (
    <TOC.TOCBox>
      <Flex as="ol" direction="column">
        {headingElements.map((heading) => (
          <List
            key={heading.id}
            id={heading.id}
            isHighlight={heading.id === isHighlightId}
            headerType={heading.localName as HeadersOfContents}
            onClick={scrollToTargetHeading}
          >
            {heading.textContent}
          </List>
        ))}
      </Flex>
    </TOC.TOCBox>
  )
}

export default TOC

TOC.TOCBox = styled.div`
  z-index: ${Z_INDEX.aside};
`

const List = styled.li<{ headerType: HeadersOfContents; isHighlight: boolean }>`
  cursor: pointer;

  ${({ headerType, theme }) => {
    switch (headerType) {
      case 'h2':
        return css`
          ${FONT.title_3};
          color: ${theme.color.grey800};
        `
      case 'h3':
      default:
        return css`
          margin-left: 12px;
          padding-left: 12px;
          border-left: 1px solid ${theme.color.grey300};
          ${FONT.caption_1};
          color: ${theme.color.grey700};
        `
    }
  }}

  ${({ theme, isHighlight }) =>
    isHighlight &&
    css`
      color: ${theme.color.primary500};
      filter: drop-shadow(
        0 0 8px rgba(${convertHEXToRGB(theme.color.primary400)}, 0.7)
      ); ;
    `};

  :hover {
    color: ${({ theme }) => theme.color.primary300};
  }
`
