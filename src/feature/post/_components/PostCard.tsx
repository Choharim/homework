import React, { ComponentProps, PropsWithChildren } from 'react'

import Typo from '@/components/Typo'
import Flex from '@/components/Flex'

import * as style from './postCard.css'

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

function LabelSection({ children }: PropsWithChildren) {
  return (
    <Flex
      as="section"
      align="center"
      gap={'8px'}
      className={style.labelContainer}
    >
      {children}
    </Flex>
  )
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
    <Typo as="time" dateTime={dateTime} variety="subtitle_2" color="grey600">
      {dateTime}
    </Typo>
  )
}
