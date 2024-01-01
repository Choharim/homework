import React, { PropsWithChildren } from 'react'
import Link from 'next/link'

type Props = {
  category: string
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
