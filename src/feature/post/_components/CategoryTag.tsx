import Typo from '@/components/Typo'
import React from 'react'
import PostFeature from '..'
import * as style from './categoryTag.css'
import { PostTag } from '@/entity/post/type'

type Size = 's' | 'm'

type TagStyle = {
  size: Size
}

interface Props extends TagStyle {
  children: PostTag
}
function CategoryTag({ children: tag, size }: Props) {
  return (
    <Typo
      responsive={false}
      as="span"
      variety={size === 's' ? 'subtitle_3' : 'subtitle_2'}
      color="grey700"
      className={style.base}
    >
      {PostFeature.getTagName(tag)}
    </Typo>
  )
}

export default CategoryTag
