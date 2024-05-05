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
import Link from 'next/link'
import AppFeature from '@/feature/app'

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
    style.link[isSeleted ? 'selected' : 'default']
  )

  return (
    <Link
      href={
        category
          ? AppFeature.getAppURI({
              name: 'category',
              pathParams: { category },
            })
          : AppFeature.getAppURI({ name: 'main' })
      }
      className={_className}
    >
      <_Chip
        {...props}
        size="l"
        color="primary"
        variety={isSeleted ? 'solid' : 'outline'}
        ref={forwardedRef}
      >
        {category ? postFeature.getCategoryName(category) : children}
      </_Chip>
    </Link>
  )
}

export default forwardRef(Chip)
