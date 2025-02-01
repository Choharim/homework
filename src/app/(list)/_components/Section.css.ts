import COLOR from '@/styles/color'
import { style } from '@vanilla-extract/css'

export const frame = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  margin: '24px 0',
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
})

export const link = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  color: COLOR.grey700,

  ':hover': {
    color: COLOR.grey900,
  },
})
