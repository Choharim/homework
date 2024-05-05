import { convertHEXToRGB } from '@/shared/utils/string'
import COLOR from '@/styles/constants/color'
import Z_INDEX from '@/styles/constants/zIndex'
import { createVar, style, styleVariants } from '@vanilla-extract/css'

export const NAVBAR_HEIGHT = 60

export const navigationYVar = createVar()

export const NAV_Y = {
  show: '0',
  hidden: '-100%',
}

export const navigation = style({
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  height: NAVBAR_HEIGHT,
  backgroundColor: `rgb(${convertHEXToRGB(COLOR.white)}, 0.5)`,
  backdropFilter: 'saturate(180%) blur(5px)',
  borderBottom: `1px solid ${COLOR.grey200}`,
  zIndex: Z_INDEX.nav,
  display: 'block',
  transition: 'transform 0.2s',
  transform: `translateY(${navigationYVar})`,
})

export const navigationFrame = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const menuWrapperBase = style({
  borderRadius: 4,

  selectors: {
    '&:not(:first-of-type)': {
      marginLeft: 10,
    },
  },
})

export const menuWrapper = styleVariants({
  default: [menuWrapperBase],
  active: [
    menuWrapperBase,
    { pointerEvents: 'none', backgroundColor: COLOR.grey100 },
  ],
})

const menuBase = style({
  display: 'flex',
  alignItems: 'center',
  padding: '3px 8px',

  selectors: {
    [`${menuWrapperBase}:hover &`]: {
      color: COLOR.primary400,
    },
  },
})

export const menu = styleVariants({
  default: [menuBase],
  active: [
    menuBase,
    {
      color: COLOR.primary400,
    },
  ],
})
