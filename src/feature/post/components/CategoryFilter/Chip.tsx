import { PostCategory } from '@/adapter/notion/type'

import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import postFeature from '../..'
import styled from '@emotion/styled'
import Typo from '@/components/typo'
import { css } from '@emotion/react'

interface Props extends ComponentPropsWithoutRef<'span'> {
  category: PostCategory
  isActive: boolean
}
const Chip = (
  { category, isActive, ...props }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  return (
    <CategoryText
      {...props}
      ref={forwardedRef}
      variety="title_3"
      color="grey700"
      wrap="nowrap"
      isActive={isActive}
    >
      {postFeature.getCategoryName(category)}
    </CategoryText>
  )
}

export default forwardRef(Chip)

const CategoryText = styled(Typo)<{ isActive: boolean }>`
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.grey200};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.color.primary400};
      background-color: ${theme.color.grey100};
    `};

  &:hover {
    color: ${({ theme }) => theme.color.primary400};
  }
`
