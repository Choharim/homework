import React, { ComponentProps, PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import Post from '@/domain/post/type'
import Typo from '@/components/typo'
import Flex from '@/components/flex'

import { POST_DIRECTORY } from '@/domain/post/constant'
import { limitTextLine } from '@/styles/mixin'

const PostCardLink = ({
  children,
  slug,
}: PropsWithChildren<Pick<Post, 'slug'>>) => {
  return (
    <Link href={`/${POST_DIRECTORY}/[slug]`} as={`/${POST_DIRECTORY}/${slug}`}>
      <CardWrapper direction="column" as="article" gap="15px">
        {children}
      </CardWrapper>
    </Link>
  )
}

export default PostCardLink

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

PostCardLink.Title = function Title({ children }: PropsWithChildren) {
  return (
    <TitleWrapper as="h3" variety="header_3" color="grey800">
      {children}
    </TitleWrapper>
  )
}

PostCardLink.Desc = function Desc({ children }: PropsWithChildren) {
  return (
    <DescWrapper as="p" variety="title_2" color="grey700">
      {children}
    </DescWrapper>
  )
}

const DescWrapper = styled(Typo)`
  ${limitTextLine(2)};
`

PostCardLink.Date = function Date({
  dateTime,
}: Pick<ComponentProps<'time'>, 'dateTime'>) {
  return (
    <Typo as="time" dateTime={dateTime} variety="title_3" color="grey600">
      {dateTime}
    </Typo>
  )
}

PostCardLink.Top = function Top({ children }: PropsWithChildren) {
  return <TopWrapper>{children}</TopWrapper>
}

const TopWrapper = styled.div`
  display: grid;
  gap: 10px;
`

PostCardLink.Bottom = function Bottom({ children }: PropsWithChildren) {
  return <BottomWrapper>{children}</BottomWrapper>
}

const BottomWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
  width: fit-content;
`
