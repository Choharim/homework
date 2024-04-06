import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'

import Chip from '@/components/Chip'
import postFeature from '@/feature/post'
import { PostCategory } from '@/adapter/notion/type'

interface Props extends ComponentPropsWithoutRef<'span'> {
  category: PostCategory
}

const CategoryChip = (
  { category, ...props }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  return (
    <Chip {...props} ref={forwardedRef}>
      {postFeature.getCategoryName(category)}
    </Chip>
  )
}

export default forwardRef(CategoryChip)
