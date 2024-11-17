import FONT from '@/styles/constants/font'
import { createThemeContract, style, styleVariants } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  color: null,
})

export const wrapper = style({
  color: themeVars.color,
  ':empty': {
    display: 'none',
  },
})

export const variety = styleVariants(FONT)
