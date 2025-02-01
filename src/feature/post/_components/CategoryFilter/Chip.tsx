import { PostCategory } from '@/entity/post/type'

import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import PostFeature from '../..'

import { Either } from '@/shared/_types'
import _Chip from '@/components/Chip'

import * as style from '../categoryFilterChip.css'
import { combineClassName } from '@/styles/mixin'
import Link from 'next/link'
import AppFeature from '@/feature/application'

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
          : AppFeature.getAppURI({ name: 'categoryMain' })
      }
      className={_className}
    >
      <_Chip
        {...props}
        size="l"
        color="primary"
        variety={isSeleted ? 'solid' : 'soft'}
        ref={forwardedRef}
      >
        {category ? PostFeature.getCategoryName(category) : children}
      </_Chip>
    </Link>
  )
}

export default forwardRef(Chip)
