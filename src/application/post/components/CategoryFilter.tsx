import React from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import CategoryLink from './CategoryLink'
import Typo from '@/components/typo'
import Flex from '@/components/flex'

import { CATEGORIES } from '@/domain/post/constant'
import { CATEGORY_TITLE } from '@/application/post/constant'
import { Category } from '@/domain/post/type'

const CategoryFilter = () => {
  const { query } = useRouter()

  const isCategory = (category: unknown): category is Category => {
    return CATEGORIES.includes(category as Category)
  }

  const isActive = (category: Category) => {
    if (isCategory(query.slug)) {
      return query.slug === category
    } else {
      return category === 'all'
    }
  }

  return (
    <CategoryContainer align="center" gap="18px" wrap="wrap">
      {CATEGORIES.map((category, i) => (
        <CategoryLink key={`${category}_${i}`} category={category}>
          <CategoryText
            variety="title_3"
            color="grey700"
            wrap="nowrap"
            isActive={isActive(category)}
          >
            {CATEGORY_TITLE[category]}
          </CategoryText>
        </CategoryLink>
      ))}
    </CategoryContainer>
  )
}

export default CategoryFilter

const CategoryContainer = styled(Flex)`
  margin: 32px 0;
`
const CategoryText = styled(Typo)<{ isActive: boolean }>`
  padding: 8px 12px;
  border-radius: 8px;

  ${({ isActive, theme }) =>
    isActive
      ? css`
          color: ${theme.color.primary500};
          background-color: ${theme.color.grey100};
          cursor: default;
        `
      : css`
          &:hover {
            background-color: ${theme.color.grey100};
          }
        `};
`
