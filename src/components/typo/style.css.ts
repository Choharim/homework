import FONT from '@/styles/constants/font'
import { createThemeContract, style, styleVariants } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  wrap: null,
  color: null,
})

export const wrapper = style({
  whiteSpace: themeVars.wrap,
  color: themeVars.color,
  ':empty': {
    display: 'none',
  },
})

export const variety = styleVariants(FONT)
