import React, { MouseEvent, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { HEADERS_OF_CONTENTS } from '@/application/post/constant'
import { Z_INDEX } from '@/styles/constant'
import { NAVBAR_HEIGHT } from '../layout/Navbar'
import { HeadersOfContents } from '@/application/post/type'
import { setTOCId } from '@/application/post'

export const TOC_WIDTH_IN_PC = 280

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: `-${NAVBAR_HEIGHT}px`,
  threshold: 0,
}

const TOC = () => {
  const [headingElements, setHeadingElements] = useState<Element[]>([])
  const [highlightId, setHighlightId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHighlightId(entry.target.id)
          }
        }),
      OBSERVER_OPTIONS
    )

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
    <TOCBox>
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
    </TOCBox>
  )
}

export default TOC

const TOCBox = styled.div`
  position: sticky;
  right: 0;
  top: ${NAVBAR_HEIGHT + 5}px;

  width: ${TOC_WIDTH_IN_PC}px;
  padding: 5px;
  z-index: ${Z_INDEX.aside};

  ${({ theme }) => theme.media.tablet} {
    position: unset;
    width: 100%;
  }
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
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
          ${theme.font.subtitle_2}
        `
      case 'h3':
      default:
        return css`
          ${theme.font.subtitle_3}
          margin: 2px 0 2px 10px;
          color: ${theme.color.gray1};
        `
    }
  }}

  color:  ${({ theme, $highlight }) =>
    $highlight ? theme.color.primary4 : theme.color.gray1};

  :hover {
    color: ${({ theme }) => theme.color.primary3};
  }
`
