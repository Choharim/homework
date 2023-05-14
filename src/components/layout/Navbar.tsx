import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { GITHUB_URL } from '@/domain/owner/constant'
import useScrollDirection from '@/hooks/useScrollDirection'
import { convertHEXToRGB } from '@/utils/string'
import { PAGE_PATH } from '@/constants/route'
import useScrollTop from '@/hooks/useScrollTop'

import Frame from './Frame'
import Logo from '../Logo'
import Z_INDEX from '@/styles/constants/zIndex'

export const NAVBAR_HEIGHT = 60

type TextMenu = {
  href: string
  isOutlink: boolean
  label: string
}

const MENUS: Array<TextMenu> = [
  {
    href: PAGE_PATH.about.path,
    isOutlink: false,
    label: PAGE_PATH.about.label,
  },
  {
    href: GITHUB_URL,
    isOutlink: true,
    label: 'Github',
  },
]

const SCROLL_THRESHOLD = 30

const Navbar = () => {
  const direction = useScrollDirection(SCROLL_THRESHOLD)
  const isScrollTop = useScrollTop()

  return (
    <Navigation hidden={direction === 'down' && !isScrollTop}>
      <CustomFrame>
        <Logo isFold />
        <Navbar.Menu />
      </CustomFrame>
    </Navigation>
  )
}

export default Navbar

Navbar.Menu = React.memo(function Component() {
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
              <MenuText>{menu.label}</MenuText>
            </LinkWrapper>
          </Link>
        </Menu>
      ))}
    </MenuContainer>
  )
})

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

const MenuContainer = styled.ul`
  display: flex;
  align-items: baseline;
`

const MenuText = styled.span`
  color: ${({ theme }) => theme.color.grey700};
  ${({ theme }) => theme.font.subtitle_3};
`

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: 3px 8px;
`

const Menu = styled.li<{ $active: boolean }>`
  border-radius: 4px;

  &:not(:first-child) {
    margin-left: 10px;
  }

  &:hover {
    ${MenuText} {
      color: ${({ theme }) => theme.color.primary400};
    }
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      pointer-events: none;
      background-color: ${theme.color.grey100};

      ${MenuText} {
        color: ${theme.color.primary400};
      }
    `}
`
