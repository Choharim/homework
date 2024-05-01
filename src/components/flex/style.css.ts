import { createThemeContract, style } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  direction: null,
  justify: null,
  align: null,
  gap: null,
  wrap: null,
})

export const wrapper = style({
  display: 'flex',
  flexDirection: themeVars.direction,
  justifyContent: themeVars.justify,
  alignItems: themeVars.align,
  gap: themeVars.gap,
  flexWrap: themeVars.wrap,
})
