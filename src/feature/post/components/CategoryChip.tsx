import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'

import postFeature from '@/feature/post'
import { PostCategory } from '@/adapter/notion/type'
import Chip from '@/components/Chip'

interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof Chip>,
    'color' | 'size' | 'variety'
  > {
  category: PostCategory
}
const CategoryChip = (
  { category, ...props }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  return (
    <Chip
      {...props}
      color="primary"
      size="s"
      variety="surface"
      ref={forwardedRef}
    >
      {postFeature.getCategoryName(category)}
    </Chip>
  )
}

export default forwardRef(CategoryChip)
