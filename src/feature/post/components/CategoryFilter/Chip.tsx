import { PostCategory } from '@/entity/post/type'

import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import postFeature from '../..'

import { Either } from '@/shared/types/narrow'
import _Chip from '@/components/Chip'

import * as style from '../style/categoryFilterChip.css'
import { combineClassName } from '@/styles/mixin'

export type Theme = {
  isSeleted: boolean
}

type Props = Omit<
  ComponentPropsWithoutRef<typeof _Chip>,
  'children' | 'color' | 'size' | 'variety'
> &
  Theme &
  Either<{ category: PostCategory }, { children: ReactNode }>

const Chip = (
  { children, category, isSeleted, className, ...props }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  const _className = combineClassName(
    className,
    style.wrapper[isSeleted ? 'selected' : 'default']
  )

  return (
    <_Chip
      {...props}
      size="l"
      color="primary"
      variety={isSeleted ? 'solid' : 'outline'}
      className={_className}
      ref={forwardedRef}
    >
      {category ? postFeature.getCategoryName(category) : children}
    </_Chip>
  )
}

export default forwardRef(Chip)
