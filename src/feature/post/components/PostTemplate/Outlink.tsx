import COLOR from '@/styles/constants/color'
import { css } from '@emotion/react'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

const Outlink = ({
  children,
  ...linkAttributes
}: ComponentPropsWithoutRef<'a'>) => {
  const { href = '' } = linkAttributes

  return (
    <Link
      {...linkAttributes}
      href={href}
      target="_blank"
      rel="noreferrer"
      css={css`
        all: unset;
        text-decoration: 2px underline dashed;
        text-underline-offset: 5px;
        word-break: break-word;

        cursor: pointer;

        color: ${COLOR.primary600};
        &:hover {
          color: ${COLOR.primary400};
        }
      `}
    >
      {children}
    </Link>
  )
}

export default Outlink
