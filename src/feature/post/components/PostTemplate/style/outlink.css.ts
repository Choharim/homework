import COLOR from '@/styles/constants/color'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  all: 'unset',
  textDecoration: '2px underline dashed',
  textUnderlineOffset: 5,
  wordBreak: 'break-word',

  cursor: 'pointer',

  color: COLOR.primary600,
  ':hover': {
    color: COLOR.primary400,
  },
})
