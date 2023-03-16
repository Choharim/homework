import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { HTMLAttributes } from 'react'

import { PaginationProps } from './Pagination'

interface PageLinkProps
  extends Pick<PaginationProps, 'pageQueryKey'>,
    HTMLAttributes<HTMLLinkElement> {
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
      href={{
        query: {
          ...router.query,
          [pageQueryKey]: pageQueryValue,
        },
      }}
    >
      <a className={className}>{children}</a>
    </Link>
  )
}

export default PageLink
