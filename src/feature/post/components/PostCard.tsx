import React, { ComponentProps, PropsWithChildren } from 'react'
import styled from '@emotion/styled'

import Typo from '@/components/typo'
import Flex from '@/components/flex'

import { limitTextLine } from '@/styles/mixin'
import MEDIA from '@/styles/constants/media'
import { PostTag } from '@/entity/post/type'
import postFeature from '..'
import COLOR from '@/styles/constants/color'
import { css } from '@emotion/react'

const PostCard = ({ children }: PropsWithChildren) => {
  return (
    <CardWrapper direction="column" as="article" justify="space-between">
      {children}
    </CardWrapper>
  )
}

export default Object.assign(PostCard, {
  Title,
  Desc,
  Date,
  Tag,
  Top,
  Bottom,
})

const TitleWrapper = styled(Typo)`
  ${limitTextLine(2)};
  transition: color 0.2s ease-in-out;
`

const CardWrapper = styled(Flex)`
  padding: 20px 16px;
  border-radius: 12px;
  cursor: pointer;

  min-height: 260px;
  ${MEDIA.mobile} {
    min-height: 220px;
  }

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    ${TitleWrapper} {
      color: ${COLOR.primary500};
    }

    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;
`

function Title({ children }: PropsWithChildren) {
  return (
    <TitleWrapper as="h3" variety="header_4" color="grey800">
      {children}
    </TitleWrapper>
  )
}

function Desc({ children }: PropsWithChildren) {
  return (
    <DescWrapper as="p" variety="body_1" color="grey800">
      {children}
    </DescWrapper>
  )
}

const DescWrapper = styled(Typo)`
  ${limitTextLine(2)};
`

function Date({ dateTime }: Pick<ComponentProps<'time'>, 'dateTime'>) {
  return (
    <Typo as="time" dateTime={dateTime} variety="caption_1" color="grey700">
      {dateTime}
    </Typo>
  )
}

function Tag({ tags }: { tags: PostTag[] }) {
  return (
    <>
      {tags.map((tag, i) => (
        <Typo
          key={`${tag}-${i}`}
          as="span"
          variety="caption_1"
          color="grey700"
          css={css`
            &::before {
              content: '#';
              color: ${COLOR.primary600};
            }
          `}
        >
          {postFeature.getTagName(tag)}
        </Typo>
      ))}
    </>
  )
}

function Top({ children }: PropsWithChildren) {
  return <TopWrapper>{children}</TopWrapper>
}

const TopWrapper = styled.div`
  display: grid;
  gap: 8px;
`

function Bottom({ children }: PropsWithChildren) {
  return <BottomWrapper>{children}</BottomWrapper>
}

const BottomWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 8px;
  width: fit-content;

  margin-top: 16px;
`
