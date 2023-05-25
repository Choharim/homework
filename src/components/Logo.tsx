import { BLOG } from '@/domain/owner/constant'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import styled, { css, keyframes } from 'styled-components'
import Typo from './typo'

interface Props extends ComponentProps<typeof Typo> {
  isFold: boolean
  isHighlightInitial?: boolean
}
const Logo = ({ isFold, isHighlightInitial, ...typoProps }: Props) => {
  const alphabets = BLOG.fullName.split('')

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
            variety={typoProps.variety ?? 'header_4'}
            {...typoProps}
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

  50% {
  opacity: 0.5;
  }

  100% {
    opacity: 1;
    width: 100%;
  }
`

const Name = styled(Typo)<{
  $isInitial: boolean
  $isFold: Props['isFold']
  $isHighlightInitial: Props['isHighlightInitial']
}>`
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

          animation: ${acordian} 3s ease-in-out 0.5s
            ${$isFold && 'reverse forwards'};
        `}
`
