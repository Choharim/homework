import COLOR from '@/styles/constants/color'
import { style } from '@vanilla-extract/css'
import FONT from '@/styles/constants/font'

export const wrapper = style({
  margin: '0 auto',
  color: COLOR.grey900,
  height: 100,
  ...FONT.body_1,
})
