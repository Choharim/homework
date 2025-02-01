import { style } from '@vanilla-extract/css'

export const wrapper = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    height: '100%',
  },
])

export const topGap = style({
  marginTop: 24,
})
