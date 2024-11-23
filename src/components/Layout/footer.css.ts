import COLOR from '@/styles/constants/color'
import { style } from '@vanilla-extract/css'
import FONT from '@/styles/constants/font'

export const FOOTER_HEIGHT = 100

export const footer = style({
  margin: '0 auto',
  color: COLOR.grey800,
  height: FOOTER_HEIGHT,
  ...FONT.body_1,
})
