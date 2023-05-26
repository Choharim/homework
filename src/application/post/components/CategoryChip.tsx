import React from 'react'

import { Category } from '@/domain/post/type'
import { CATEGORY_TITLE } from '@/application/post/constant'

import CategoryLink from './CategoryLink'
import Chip from '@/components/Chip'

type Props = {
  category: Category
}

const CategoryChip = ({ category }: Props) => {
  return (
    <CategoryLink category={category}>
      <Chip>{CATEGORY_TITLE[category]}</Chip>
    </CategoryLink>
  )
}

export default CategoryChip
