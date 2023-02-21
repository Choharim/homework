import { BLOG_NAME } from '@/domain/owner/constant'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface Props extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  isFold: boolean
  isHighlightInitial?: boolean
}
const Logo = ({ isFold, isHighlightInitial, ...rest }: Props) => {
  const alphabets = BLOG_NAME.fullName.split('')

  const isInitial = (alphabet: string) => {
    return alphabet.toUpperCase() === alphabet
  }

  return (
    <Link href="/">
      <LogWrapper>
        {alphabets.map((alphabet, i) => (
          <Name
            key={`${alphabet}_${i}`}
            $isInitial={isInitial(alphabet)}
            $isFold={isFold}
            $isHighlightInitial={isHighlightInitial}
            {...rest}
          >
            {alphabet}
          </Name>
        ))}
      </LogWrapper>
    </Link>
  )
}

export default React.memo(Logo)

const LogWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const acordian = keyframes`
  0% {
    opacity: 0;
    width: 0;
  }
  20% {
  opacity: 0.2;
  }
  40% {
  opacity: 0.4;
  }
  60% {
  opacity: 0.6;
  }
  80% {
  opacity: 0.8;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
`

const Name = styled.span<{
  $isInitial: boolean
  $isFold: Props['isFold']
  $isHighlightInitial: Props['isHighlightInitial']
}>`
  ${({ theme }) => theme.font.header_4};

  ${({ $isInitial, theme, $isFold, $isHighlightInitial }) =>
    $isInitial
      ? css`
          color: ${theme.color.primary500};
          font-weight: bold;
        `
      : css`
          color: ${$isHighlightInitial
            ? theme.color.primary300
            : theme.color.primary500};

          animation: ${acordian} 3.5s ease-in-out 1s
            ${$isFold && 'reverse forwards'};
        `}
`
