import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { KO_NAME } from 'entity/owner/constant'

export const NAVBAR_HEIGHT = 56

const Navbar = () => {
  return (
    <Navigation>
      <Link href="/" passHref>
        <a>
          <Name>{KO_NAME.first}</Name>
        </a>
      </Link>
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.color.lightBlack};
`

const Name = styled.span`
  color: ${({ theme }) => theme.color.white};
`
