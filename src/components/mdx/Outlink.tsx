import Link from 'next/link'
import React, { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: string
  className: string
}

const domainRegex = /http[s]*:\/\/[www.]*harim-log.vercel\.app[/]?/

const Outlink = ({ children, className, href }: Props) => {
  const sameDomain = href && domainRegex.test(href)

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

  &:hover {
    color: ${({ theme }) => theme.color.primary5};
  }
`
