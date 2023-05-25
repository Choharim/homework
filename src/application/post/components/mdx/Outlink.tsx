import Link from 'next/link'
import React, { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: string
  className: string
}

const domainRegex = /http[s]*:\/\/[www.]*rootinmeaningful.vercel\.app[/]?/

const Outlink = ({ children, className, href = '' }: Props) => {
  const sameDomain = href.startsWith('/') || domainRegex.test(href)

  return (
    <>
      {sameDomain ? (
        <Link className={className} href={href} passHref>
          <A target="_blank">{children}</A>
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
    </>
  )
}

export default Outlink

const A = styled.a`
  text-decoration: 2px underline dashed;
  text-underline-offset: 5px;

  color: ${({ theme }) => theme.color.primary200};
  &:hover {
    color: ${({ theme }) => theme.color.primary100};
  }
`
