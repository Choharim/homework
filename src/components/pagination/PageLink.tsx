import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ComponentProps } from 'react'

import { PaginationProps } from './Pagination'

interface PageLinkProps
  extends Pick<PaginationProps, 'pageQueryKey'>,
    ComponentProps<'a'> {
  pageQueryValue: number
  children: React.ReactElement
}
function PageLink({
  pageQueryKey,
  pageQueryValue,
  children,
  className,
}: PageLinkProps) {
  const router = useRouter()

  return (
    <Link
      className={className}
      href={{
        query: {
          ...router.query,
          [pageQueryKey]: pageQueryValue,
        },
      }}
    >
      {children}
    </Link>
  )
}

export default PageLink
