import COLOR from '@/styles/color'
import { style } from '@vanilla-extract/css'

export const wrapper = style([
  {
    position: 'relative',
    margin: '0 20px 0 20px',
    minHeight: 280,
    cursor: 'pointer',

    transition: 'transform 300ms ease-in-out',

    ':hover': {
      transform: 'translateY(-4px)',
    },
  },
])

export const link = style({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
})

export const title = style({
  transition: 'color 0.2s ease-in-out',

  selectors: {
    [`${wrapper}:hover &`]: {
      color: COLOR.primary400,
    },
  },
})

export const footer = style({
  marginTop: 16,
})
