import React from 'react'

import CategoryLink from './CategoryLink'
import Chip from '@/components/Chip'
import postFeature from '@/feature/post'
import { PostCategory } from '@/adapter/notion/type'

type Props = {
  category: PostCategory
}

const CategoryChip = ({ category }: Props) => {
  return (
    <CategoryLink category={category}>
      <Chip>{postFeature.getCategoryName(category)}</Chip>
    </CategoryLink>
  )
}

export default CategoryChip
