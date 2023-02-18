import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import { EN_NAME, GITHUB_URL } from '@/domain/owner/constant'
import useScrollDirection from '@/hooks/useScrollDirection'
import { Z_INDEX } from '@/styles/constant'
import { convertHEXToRGB } from '@/utils/convertColorFormat'

import GithubLogo from 'public/github_logo.png'
import Frame from './Frame'

export const NAVBAR_HEIGHT = 60

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
    href: GITHUB_URL,
    img_url: GithubLogo,
    img_alt: 'github_logo_image',
    isOutlink: true,
  },
]

const SCROLL_THRESHOLD = 30

const Navbar = () => {
  const direction = useScrollDirection(SCROLL_THRESHOLD)

  return (
    <Navigation hidden={direction === 'down'}>
      <CustomFrame>
        <Navbar.Logo />
        <Navbar.Menu />
      </CustomFrame>
    </Navigation>
  )
}

export default Navbar

Navbar.Logo = function Component() {
  return (
    <Link href="/">
      <a>
        <LogWrapper>
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
                  height={22}
                  width={22}
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

const Navigation = styled.nav<{ hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;

  background-color: rgb(
    ${({ theme }) => convertHEXToRGB(theme.color.white)},
    0.5
  );
  backdrop-filter: saturate(180%) blur(5px);
  border-bottom: 1px solid ${({ theme }) => theme.color.grey200};
  z-index: ${Z_INDEX.nav};

  display: block;
  ${({ hidden }) =>
    hidden
      ? css`
          transform: translateY(-100%);
        `
      : css`
          transform: translateY(0);
        `};

  transition: transform 0.2s;
`

const CustomFrame = styled(Frame)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.span`
  color: ${({ theme }) => theme.color.primary600};
  ${({ theme }) => theme.font.header_4};
`

const MenuContainer = styled.ul`
  display: flex;
  padding-left: 0;
`

const MenuText = styled.span`
  color: ${({ theme }) => theme.color.grey700};
  ${({ theme }) => theme.font.subtitle_3};
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
    ${MenuText} {
      color: ${({ theme }) => theme.color.grey800};
    }
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      pointer-events: none;

      ${MenuText} {
        color: ${theme.color.grey800};
      }
    `}
`
