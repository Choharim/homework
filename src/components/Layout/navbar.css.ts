import { convertHEXToRGB } from '@/shared/_utils'
import COLOR from '@/styles/color'
import Z_INDEX from '@/styles/zIndex'
import { createVar, style } from '@vanilla-extract/css'

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
  borderBottom: `1px solid ${COLOR.grey100}`,
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

export const menuWrapper = style({
  borderRadius: 4,

  selectors: {
    '&:not(:first-of-type)': {
      marginLeft: 10,
    },

    '&[data-active="true"]': {
      pointerEvents: 'none',
      backgroundColor: COLOR.grey100,
    },

    '&:hover': {
      backgroundColor: COLOR.grey50,
    },
  },
})

export const menu = style({
  display: 'flex',
  alignItems: 'center',
  padding: '3px 8px',

  selectors: {
    [`${menuWrapper}:hover &`]: {
      color: COLOR.primary400,
    },

    [`${menuWrapper}[data-active="true"] &`]: {
      color: COLOR.primary500,
    },
  },
})
