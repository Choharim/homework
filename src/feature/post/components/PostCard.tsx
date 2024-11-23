import React, { ComponentProps, PropsWithChildren } from 'react'

import Typo from '@/components/Typo'
import Flex from '@/components/Flex'

import { PostTag } from '@/entity/post/type'
import postFeature from '..'

import * as style from './style/postCard.css'

const PostCard = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      direction="column"
      as="article"
      justify="between"
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
      variety="header_2"
      color="grey900"
      lineClamp={2}
      className={style.title}
    >
      {children}
    </Typo>
  )
}

function Desc({ children }: PropsWithChildren) {
  return (
    <Typo as="p" variety="title_3" color="grey800" lineClamp={2}>
      {children}
    </Typo>
  )
}

function Tag({ children: tag }: { children: PostTag }) {
  return (
    <Typo
      responsive={false}
      as="span"
      variety="subtitle_2"
      color="grey700"
      className={style.tag}
    >
      {postFeature.getTagName(tag)}
    </Typo>
  )
}

function LabelSection({ children }: PropsWithChildren) {
  return <section className={style.labelContainer}>{children}</section>
}

function Content({ children }: PropsWithChildren) {
  return (
    <Flex direction="column" gap="8px" as="section">
      {children}
    </Flex>
  )
}

function Date({ dateTime }: Pick<ComponentProps<'time'>, 'dateTime'>) {
  return (
    <Typo
      as="time"
      dateTime={dateTime}
      variety="subtitle_2"
      color="grey600"
      className={style.date}
    >
      {dateTime}
    </Typo>
  )
}
