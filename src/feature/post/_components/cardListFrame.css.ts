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
  marginTop: 28,
})

export const link = style({
  minHeight: 100,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
