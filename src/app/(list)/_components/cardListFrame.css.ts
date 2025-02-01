import { style } from '@vanilla-extract/css'

export const wrapper = style([
  {
    display: 'grid',
    gridTemplateColumns: `repeat(3, 1fr)`,
    margin: '0 -20px',
    rowGap: 48,
  },
])
