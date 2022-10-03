import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { EN_NAME, GITHUB_URL } from 'entity/owner/constant'
import Logo from 'public/logo.png'
import GithubLogo from 'public/github_logo.png'
import { deviceSize } from 'constants/common'
import { POST_DIRECTORY } from 'entity/post/constant'
import { Z_IDEX } from 'styles/constant'

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

        <MenuContainer>
          {MENUS.map((menu, i) => (
            <Menu key={`menu_${i}`}>
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
      </Frame>
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;

  background-color: ${({ theme }) => theme.color.white};
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
  color: ${({ theme }) => theme.color.lightBlack};
  ${({ theme }) => theme.font.header_3};
`

const MenuContainer = styled.ul`
  display: flex;
  padding-left: 0;
`

const Menu = styled.li`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 10px;
  }
`

const LinkWrapper = styled.a`
  padding: 12px 10px;
`

const MenuText = styled.span`
  color: ${({ theme }) => theme.color.lightBlack};
  ${({ theme }) => theme.font.subtitle_2};
`
