import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ComponentProps, ReactElement } from 'react'

import { PaginationProps } from './Pagination'

interface PageControllerProps
  extends Pick<PaginationProps, 'routerQueryKey'>,
    ComponentProps<'a'> {
  value: number
  disabled: boolean
  children: ReactElement
}
function PageController({
  routerQueryKey,
  value,
  disabled,
  className,
  children,
}: PageControllerProps) {
  const router = useRouter()

  return (
    <Link
      href={{
        query: {
          ...router.query,
          [routerQueryKey]: value,
        },
      }}
      data-disabled={disabled}
      className={className}
    >
      {children}
    </Link>
  )
}

export default PageController
