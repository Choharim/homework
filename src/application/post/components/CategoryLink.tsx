import React from 'react'
import Link from 'next/link'

import { Category } from '@/domain/post/type'

type Props = {
  category: Category
  children: React.ReactNode
}

const CategoryLink = ({ category, children }: Props) => {
  return (
    <Link
      href={{
        pathname: '/category/[slug]',
        query: { slug: category },
      }}
    >
      <a>{children}</a>
    </Link>
  )
}

export default CategoryLink
