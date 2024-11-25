import COLOR from '@/styles/color'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  margin: '0 auto',
  padding: '30px 0',
})

const base = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  width: 32,
  height: 32,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: COLOR.grey50,
    },
  },
})

export const page = style([
  base,
  {
    color: COLOR.grey600,

    selectors: {
      '&[data-active="true"]': {
        pointerEvents: 'none',

        color: COLOR.primary500,
        backgroundColor: COLOR.primary50,
      },
    },
  },
])

export const pageController = style([
  base,
  {
    selectors: {
      '&[data-disabled="true"]': {
        pointerEvents: 'none',
      },
    },
  },
])

export const icon = style({
  width: 20,
  height: 20,

  selectors: {
    [`${pageController}[data-disabled="true"] &`]: {
      color: COLOR.grey300,
    },
  },
})

export const iconRotate = style({
  transform: 'rotate(180deg)',
})
