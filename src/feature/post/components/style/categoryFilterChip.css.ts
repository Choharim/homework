import { styleVariants } from '@vanilla-extract/css'

export const wrapper = styleVariants({
  selected: {
    cursor: 'default',
  },
  default: {
    cursor: 'pointer',
  },
})
