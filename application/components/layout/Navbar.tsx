import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import { EN_NAME, GITHUB_URL } from 'domain/owner/constant'
import { POST_DIRECTORY } from 'domain/post/constant'
import { deviceSize } from 'application/constants/common'
import { Z_IDEX } from 'application/styles/constant'

import Logo from 'public/favicon.ico'
import GithubLogo from 'public/github_logo.png'

export const NAVBAR_HEIGHT = 58

type TextMenu = {
  href: string
  isOutlink: boolean
  label: string
}

type ImageMenu = {
  href: string
  isOutlink: boolean
  img_url: StaticImageData
  img_alt?: string
}

const isTextMenu = (menu: TextMenu | ImageMenu): menu is TextMenu => {
  return 'label' in menu
}

const MENUS: Array<TextMenu | ImageMenu> = [
  {
    href: `/${POST_DIRECTORY}`,
    label: '블로그',
    isOutlink: false,
  },
  {
    href: GITHUB_URL,
    img_url: GithubLogo,
    img_alt: 'github_logo_image',
    isOutlink: true,
  },
]

const Navbar = () => {
  return (
    <Navigation>
      <Frame>
        <Navbar.Logo />
        <Navbar.Menu />
      </Frame>
    </Navigation>
  )
}

export default Navbar

Navbar.Logo = function Component() {
  return (
    <Link href="/">
      <a>
        <LogWrapper>
          <Image
            layout="fixed"
            height={35}
            width={33}
            src={Logo}
            alt="logo_image"
          />
          <Name>{`${EN_NAME.first}'s log`}</Name>
        </LogWrapper>
      </a>
    </Link>
  )
}

Navbar.Menu = function Component() {
  const { pathname } = useRouter()

  return (
    <MenuContainer>
      {MENUS.map((menu, i) => (
        <Menu key={`menu_${i}`} $active={pathname === menu.href}>
          <Link href={menu.href} passHref>
            <LinkWrapper
              target={menu.isOutlink ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {isTextMenu(menu) ? (
                <MenuText>{menu.label}</MenuText>
              ) : (
                <Image
                  layout="fixed"
                  height={25}
                  width={25}
                  src={menu.img_url}
                  alt={menu.img_alt}
                />
              )}
            </LinkWrapper>
          </Link>
        </Menu>
      ))}
    </MenuContainer>
  )
}

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;

  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: saturate(180%) blur(5px);
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  z-index: ${Z_IDEX.nav};
`

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${deviceSize.pc}px;
  margin: 0 auto;
  padding: 0 24px;
`

const LogWrapper = styled.div`
  display: flex;
  align-items: end;
`

const Name = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.header_4};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${({ theme }) => theme.font.subtitle_1};
    }
  `}
`

const MenuContainer = styled.ul`
  display: flex;
  padding-left: 0;
`

const MenuText = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body_1};
`

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  border-radius: 4px;
`

const Menu = styled.li<{ $active: boolean }>`
  &:not(:first-child) {
    margin-left: 10px;
  }

  &:hover {
    ${LinkWrapper} {
      background-color: ${({ theme }) => theme.color.moreLightGray};
    }
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      pointer-events: none;

      ${LinkWrapper} {
        background-color: ${theme.color.moreLightGray};
      }
    `}
`
