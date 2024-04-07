import React, { ComponentProps } from 'react'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

import Typo from './typo'
import Flex from './flex'

import { BLOG } from '@/feature/app/constants/owner'
import COLOR from '@/styles/constants/color'

interface Props extends ComponentProps<typeof Typo> {
  isFold: boolean
}
const Logo = ({ isFold, ...typoProps }: Props) => {
  const alphabets = BLOG.fullName.split('')

  const isInitial = (alphabet: string) => {
    return alphabet.toUpperCase() === alphabet
  }

  return (
    <Link href="/">
      <Flex
        css={css`
          cursor: pointer;
        `}
      >
        {alphabets.map((alphabet, i) => (
          <Name
            key={`${alphabet}_${i}`}
            isFold={isFold}
            isInitial={isInitial(alphabet)}
            variety={typoProps.variety ?? 'header_4'}
            color="primary300"
            {...typoProps}
          >
            {alphabet}
          </Name>
        ))}
      </Flex>
    </Link>
  )
}

export default React.memo(Logo)

const accordion = keyframes`
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
  isInitial: boolean
  isFold: Props['isFold']
}>`
  ${({ isInitial, isFold }) =>
    isInitial
      ? css`
          color: ${COLOR.primary500};
          font-weight: bold;
        `
      : css`
          animation: ${accordion} 3s ease-in-out 0.5s
            ${isFold && 'reverse forwards'};
        `}
`
