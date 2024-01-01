import React from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import CategoryLink from './CategoryLink'
import Typo from '@/components/typo'
import Flex from '@/components/flex'

import { PostCategory } from '@/adapter/notion/type'
import postFeature from '..'

interface Props {
  categories: PostCategory[]
}
const CategoryFilter = ({ categories }: Props) => {
  const { query } = useRouter()

  const isActive = (category: PostCategory) => {
    return query.slug === category
  }

  return (
    <CategoryContainer align="center" gap="18px" wrap="wrap">
      {categories.map((category, i) => (
        <CategoryLink key={`${category}_${i}`} category={category}>
          <CategoryText
            variety="title_3"
            color="grey700"
            wrap="nowrap"
            isActive={isActive(category)}
          >
            {postFeature.getCategoryName(category)}
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
