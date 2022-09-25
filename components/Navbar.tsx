import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Navigation>
      <Link href="/" passHref>
        <a>
          <Name>Harim</Name>
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
  height: 56px;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.lightBlack};
`

const Name = styled.span`
  color: ${({ theme }) => theme.colors.white};
`
