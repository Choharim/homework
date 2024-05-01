import { DEVICE_BREAK_POINT, responsiveStyle } from '@/styles/constants/device'
import { style } from '@vanilla-extract/css'

export const wrapper = style([
  {
    width: '100%',
    height: '100%',
    maxWidth: DEVICE_BREAK_POINT.tablet,
    margin: '0 auto',
    paddingLeft: 20,
    paddingRight: 20,
  },
  responsiveStyle({
    mobile: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  }),
])
