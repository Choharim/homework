import React, { PropsWithChildren } from 'react'
import Link from 'next/link'

import { Category } from '@/domain/post/type'

type Props = {
  category: Category
}

const CategoryLink = ({ category, children }: PropsWithChildren<Props>) => {
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
