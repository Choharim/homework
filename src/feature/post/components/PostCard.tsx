import React, { ComponentProps, PropsWithChildren } from 'react'
import styled from '@emotion/styled'

import Typo from '@/components/typo'
import Flex from '@/components/flex'

import { limitTextLine } from '@/styles/mixin'
import { PostTag } from '@/entity/post/type'
import postFeature from '..'
import COLOR from '@/styles/constants/color'
import { css } from '@emotion/react'

import * as style from './style/postCard.css'

const PostCard = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      direction="column"
      as="article"
      justify="space-between"
      className={style.wrapper}
    >
      {children}
    </Flex>
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

function Title({ children }: PropsWithChildren) {
  return (
    <Typo
      as="h3"
      variety="header_4"
      color="grey800"
      className={style.title}
      css={css`
        ${limitTextLine(2)};
      `}
    >
      {children}
    </Typo>
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
  return (
    <Flex direction="column" gap="8px">
      {children}
    </Flex>
  )
}

function Bottom({ children }: PropsWithChildren) {
  return <div className={style.bottom}>{children}</div>
}
