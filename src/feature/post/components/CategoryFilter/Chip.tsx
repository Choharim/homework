import { PostCategory } from '@/adapter/notion/type'

import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import postFeature from '../..'
import styled from '@emotion/styled'

import { Either } from '@/shared/types/narrow'
import _Chip from '@/components/Chip'

type Props = Omit<
  ComponentPropsWithoutRef<typeof _Chip>,
  'children' | 'color' | 'size' | 'variety'
> & {
  isSeleted: boolean
} & Either<{ category: PostCategory }, { children: ReactNode }>

const Chip = (
  { children, category, isSeleted, ...props }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  return (
    <CategoryChip
      {...props}
      size="l"
      color="primary"
      isSeleted={isSeleted}
      variety={isSeleted ? 'solid' : 'outline'}
      ref={forwardedRef}
    >
      {category ? postFeature.getCategoryName(category) : children}
    </CategoryChip>
  )
}

export default forwardRef(Chip)

const CategoryChip = styled(_Chip)<Pick<Props, 'isSeleted'>>`
  cursor: ${({ isSeleted }) => (isSeleted ? 'default' : 'pointer')};
`
