import React, { DOMAttributes } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Chip from '../Chip'
import { Category } from '@/domain/post/type'
import { CATEGORY_TITLE, COLOR_BY_CATEGORY } from '@/application/post/constant'

interface Props extends DOMAttributes<HTMLDivElement> {
  category: Category
}

const CategoryLink = ({ category, ...rest }: Props) => {
  return (
    <Link
      href={{
        pathname: '/category/[slug]',
        query: { slug: category },
      }}
      passHref
    >
      <A>
        <CategoryLink.Chip
          $bgColor={COLOR_BY_CATEGORY[category].base}
          $hoverColor={COLOR_BY_CATEGORY[category].hover}
          {...rest}
        >
          {CATEGORY_TITLE[category]}
        </CategoryLink.Chip>
      </A>
    </Link>
  )
}

export default CategoryLink

CategoryLink.Chip = styled(Chip)<{
  $bgColor: string
  $hoverColor: string
}>`
  color: ${({ theme }) => theme.color.primary1};
  background-color: ${({ $bgColor }) => $bgColor};

  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor};
  }
`

const A = styled.a`
  width: fit-content;
`
