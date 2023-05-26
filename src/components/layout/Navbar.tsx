import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Frame from './Frame'
import Logo from '../Logo'
import Flex from '../flex'
import Typo from '../typo'

import { GITHUB_URL } from '@/domain/owner/constant'
import useScrollDirection from '@/hooks/useScrollDirection'
import { convertHEXToRGB } from '@/utils/string'
import { PAGE_PATH } from '@/constants/route'
import useScrollTop from '@/hooks/useScrollTop'
import Z_INDEX from '@/styles/constants/zIndex'

export const NAVBAR_HEIGHT = 60

type TextMenu = {
  href: string
  isOutlink: boolean
  label: string
}

const MENUS: Readonly<Array<TextMenu>> = [
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
    <Navigation isHidden={direction === 'down' && !isScrollTop}>
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
    <Flex as="ul" align="baseline">
      {MENUS.map((menu, i) => (
        <MenuWrapper key={`menu_${i}`} isActive={pathname === menu.href}>
          <Link href={menu.href} passHref>
            <LinkWrapper
              target={menu.isOutlink ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              <Menu variety="title_3" color="grey700">
                {menu.label}
              </Menu>
            </LinkWrapper>
          </Link>
        </MenuWrapper>
      ))}
    </Flex>
  )
})

const Navigation = styled.nav<{ isHidden: boolean }>`
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
  ${({ isHidden }) =>
    isHidden
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

const Menu = styled(Typo)``

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: 3px 8px;
`

const MenuWrapper = styled.li<{ isActive: boolean }>`
  border-radius: 4px;

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      pointer-events: none;
      background-color: ${theme.color.grey100};

      ${Menu} {
        color: ${theme.color.primary400};
      }
    `}

  &:hover {
    ${Menu} {
      color: ${({ theme }) => theme.color.primary400};
    }
  }
`
