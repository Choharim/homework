import { responsiveStyle } from '@/styles/constants/device'
import { style } from '@vanilla-extract/css'

export const wrapper = style([
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignContent: 'flex-start',
    gap: 24,
    height: '100%',
  },
  responsiveStyle({
    mobile: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  }),
])

export const topGap = style({
  marginTop: 40,
})

export const topLink = style({
  height: '100%',
})
