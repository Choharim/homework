import styled from '@emotion/styled'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

const domainRegex = /http[s]*:\/\/[www.]*rootinmeaningful.vercel\.app[/]?/

const Outlink = ({
  children,
  ...linkAttributes
}: ComponentPropsWithoutRef<'a'>) => {
  const { href = '' } = linkAttributes
  const sameDomain = href.startsWith('/') || domainRegex.test(href)

  return (
    <>
      {sameDomain ? (
        <Link {...linkAttributes} href={href} passHref>
          <A target="_blank" rel="noreferrer">
            {children}
          </A>
        </Link>
      ) : (
        <A href={href} target="_blank" rel="noreferrer">
          {children}
        </A>
      )}
    </>
  )
}

export default Outlink

const A = styled.a`
  text-decoration: 2px underline dashed;
  text-underline-offset: 5px;
  cursor: pointer;

  color: ${({ theme }) => theme.color.primary300};
  &:hover {
    color: ${({ theme }) => theme.color.primary100};
  }
`
