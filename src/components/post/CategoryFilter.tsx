import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import { CATEGORIES } from '@/domain/post/constant'
import { CATEGORY_TITLE, COLOR_BY_CATEGORY } from '@/application/post/constant'

import CategoryLink from './CategoryLink'
import { Category } from '@/domain/post/type'

const CategoryFilter = () => {
  const { query } = useRouter()

  const isCategory = (category: Category) => {
    return CATEGORIES.includes(category)
  }

  return (
    <CategoryButtonContainer>
      {CATEGORIES.map((category, i) => (
        <CategoryButton
          key={`${category}_${i}`}
          $active={
            !isCategory(query.slug as Category)
              ? category === 'all'
              : query.slug === category
          }
          $category={category}
        >
          <CircleCategoryLink category={category}>
            {CATEGORY_TITLE[category]}
          </CircleCategoryLink>
        </CategoryButton>
      ))}
    </CategoryButtonContainer>
  )
}

export default CategoryFilter

const CategoryButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -4px;
`
const CategoryButton = styled.button<{ $active: boolean; $category: Category }>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 4px;

  ${({ $active, $category }) =>
    $active &&
    css`
      pointer-events: none;

      ${CircleCategoryLink} {
        background-color: ${COLOR_BY_CATEGORY[$category]?.hover};
        border: 1px solid ${({ theme }) => theme.color.line};
      }
    `};
`

const CircleCategoryLink = styled(CategoryLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.font.subtitle_3}
  padding: 5px 15px;
  border-radius: 40px;
  white-space: nowrap;
  border: 2px solid transparent;

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.body_1}
    }
  `}
`
