import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import { CATEGORIES } from '@/domain/post/constant'
import { CATEGORY_TITLE } from '@/application/post/constant'
import { Category } from '@/domain/post/type'

import CategoryLink from './CategoryLink'

const GAP = 10

const CategoryFilter = () => {
  const { query } = useRouter()

  const isCategory = (category: Category) => {
    return CATEGORIES.includes(category)
  }

  const isActive = (category: Category) => {
    if (isCategory(query.slug as Category)) {
      return query.slug === category
    } else {
      return category === 'all'
    }
  }

  return (
    <CategoryContainer>
      {CATEGORIES.map((category, i) => (
        <Wrapper key={`${category}_${i}`}>
          <CategoryLink category={category}>
            <CategoryWrapper
              $isAll={category === 'all'}
              $active={isActive(category)}
            >
              {CATEGORY_TITLE[category]}
            </CategoryWrapper>
          </CategoryLink>
        </Wrapper>
      ))}
    </CategoryContainer>
  )
}

export default CategoryFilter

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -${GAP}px;
`

const Wrapper = styled.div`
  margin: ${GAP}px;
`

const CategoryWrapper = styled.div<{ $isAll: boolean; $active: boolean }>`
  padding: 4px 10px;
  border-radius: 8px;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.grey700};

  ${({ $isAll, theme }) =>
    $isAll
      ? css`
          ${theme.font.subtitle_2};
        `
      : css`
          ${theme.font.subtitle_3};
        `};

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.color.primary800};
      background-color: ${theme.color.grey100};
      cursor: default;
    `};

  &:hover {
    background-color: ${({ theme }) => theme.color.grey100};
  }
`
