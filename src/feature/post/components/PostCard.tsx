import React, { ComponentProps, PropsWithChildren } from 'react'

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
  LabelSection,
  Content,
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
    <Typo
      as="p"
      variety="title_3"
      color="grey900"
      css={css`
        ${limitTextLine(2)}
      `}
    >
      {children}
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

function LabelSection({ children }: PropsWithChildren) {
  return <section className={style.labelContainer}>{children}</section>
}

function Content({ children }: PropsWithChildren) {
  return (
    <Flex direction="column" gap="12px" as="section">
      {children}
    </Flex>
  )
}

function Date({ dateTime }: Pick<ComponentProps<'time'>, 'dateTime'>) {
  return (
    <Typo
      as="time"
      dateTime={dateTime}
      variety="caption_1"
      color="grey600"
      css={css`
        text-align: end;
        margin-top: 16px;
      `}
    >
      {dateTime}
    </Typo>
  )
}
