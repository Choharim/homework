import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import { EN_NAME, GITHUB_URL } from 'entity/owner/constant'
import Logo from 'public/logo.png'
import GithubLogo from 'public/github_logo.png'
import { deviceSize } from 'constants/common'

export const NAVBAR_HEIGHT = 65

const Navbar = () => {
  return (
    <Navigation>
      <Frame>
        <Link href="/">
          <a>
            <LogWrapper>
              <Image
                layout="fixed"
                height={40}
                width={40}
                src={Logo}
                alt="logo_image"
              />
              <Name>{`${EN_NAME.first}'s log`}</Name>
            </LogWrapper>
          </a>
        </Link>

        <Link href={GITHUB_URL}>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              layout="fixed"
              height={30}
              width={30}
              src={GithubLogo}
              alt="github_logo_image"
            />
          </a>
        </Link>
      </Frame>
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.nav`
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;

  background-color: ${({ theme }) => theme.color.lightBlack};
`

const Frame = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: ${deviceSize.pc}px;
  margin: 0 auto;
  padding: 12px 24px;
`

const LogWrapper = styled.div`
  display: flex;
  align-items: end;
`

const Name = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.header_3};
`
