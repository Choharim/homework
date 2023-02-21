import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { HEADERS_OF_CONTENTS } from '@/application/post/constant'
import { Z_INDEX } from '@/styles/constant'
import { NAVBAR_HEIGHT } from '../layout/Navbar'
import { HeadersOfContents } from '@/application/post/type'
import { setTOCId } from '@/application/post'
import { convertHEXToRGB } from '@/utils/convertColorFormat'

export const TOC_WIDTH_IN_PC = 280

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: `-${NAVBAR_HEIGHT}px`,
}

const TOC = () => {
  const [headingElements, setHeadingElements] = useState<Element[]>([])
  const [highlightId, setHighlightId] = useState<string>('')
  const entriesRef = useRef<Record<string, IntersectionObserverEntry>>({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entriesRef.current[entry.target.id] = entry
      })

      const highlightEntry = Object.values(entriesRef.current).find(
        (entry) => entry.isIntersecting
      )

      if (highlightEntry) setHighlightId(highlightEntry.target.id)
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

      setTimeout(() => setHighlightId(target.id), 100)
    }
  }

  if (!headingElements.length) <></>

  return (
    <TOC.TOCBox>
      <ListContainer>
        {headingElements.map((heading) => (
          <List
            key={heading.id}
            id={heading.id}
            $highlight={heading.id === highlightId}
            $headerType={heading.localName as HeadersOfContents}
            onClick={scrollToTargetHeading}
          >
            {heading.textContent}
          </List>
        ))}
      </ListContainer>
    </TOC.TOCBox>
  )
}

export default TOC

TOC.TOCBox = styled.div`
  z-index: ${Z_INDEX.aside};
`

const ListContainer = styled.ol`
  display: flex;
  flex-direction: column;
`

const List = styled.li<{ $headerType: HeadersOfContents; $highlight: boolean }>`
  cursor: pointer;

  ${({ $headerType, theme }) => {
    switch ($headerType) {
      case 'h2':
        return css`
          ${theme.font.body_2};
          color: ${theme.color.grey800};
        `
      case 'h3':
      default:
        return css`
          margin-left: 15px;
          ${theme.font.body_3};
          color: ${theme.color.grey700};
        `
    }
  }}

  ${({ theme, $highlight }) =>
    $highlight &&
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
