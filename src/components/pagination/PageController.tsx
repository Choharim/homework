import Link from 'next/link'
import React, { ComponentProps, ReactElement } from 'react'

import { PaginationProps } from '.'

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
  return (
    <Link
      href={{
        query: {
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
