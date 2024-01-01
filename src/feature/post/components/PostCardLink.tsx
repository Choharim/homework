import React, { ComponentProps, PropsWithChildren } from 'react'
import styled from '@emotion/styled'

import Typo from '@/components/typo'
import Flex from '@/components/flex'

import { limitTextLine } from '@/styles/mixin'
import Link, { LinkProps } from 'next/link'

const PostCardLink = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <Link {...props}>
      <CardWrapper direction="column" as="article" gap="15px">
        {children}
      </CardWrapper>
    </Link>
  )
}

export default Object.assign(PostCardLink, {
  Title,
  Desc,
  Date,
  Top,
  Bottom,
})

const TitleWrapper = styled(Typo)`
  ${limitTextLine(2)};
  transition: color 0.2s ease-in-out;
`

const CardWrapper = styled(Flex)`
  cursor: pointer;

  &:hover {
    ${TitleWrapper} {
      color: ${({ theme }) => theme.color.primary300};
    }
  }
`

function Title({ children }: PropsWithChildren) {
  return (
    <TitleWrapper as="h3" variety="header_3" color="grey800">
      {children}
    </TitleWrapper>
  )
}

function Desc({ children }: PropsWithChildren) {
  return (
    <DescWrapper as="p" variety="title_2" color="grey700">
      {children}
    </DescWrapper>
  )
}

const DescWrapper = styled(Typo)`
  ${limitTextLine(2)};
`

function Date({ dateTime }: Pick<ComponentProps<'time'>, 'dateTime'>) {
  return (
    <Typo as="time" dateTime={dateTime} variety="title_3" color="grey600">
      {dateTime}
    </Typo>
  )
}

function Top({ children }: PropsWithChildren) {
  return <TopWrapper>{children}</TopWrapper>
}

const TopWrapper = styled.div`
  display: grid;
  gap: 10px;
`

function Bottom({ children }: PropsWithChildren) {
  return <BottomWrapper>{children}</BottomWrapper>
}

const BottomWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
  width: fit-content;
`
