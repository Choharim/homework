import { convertHEXToRGB } from '@/shared/utils/string'
import COLOR from '@/styles/color'
import { style } from '@vanilla-extract/css'

export const wrapper = style([
  {
    padding: '20px 16px',
    borderRadius: 12,
    cursor: 'pointer',

    transition: 'box-shadow 300ms ease-in-out, transform 300ms ease-in-out',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',

    ':hover': {
      boxShadow: `0 5px 30px rgb(${convertHEXToRGB(COLOR.primary400)},0.3)`,
      transform: 'translateY(-4px)',
    },
  },
])

export const title = style([
  {
    transition: 'color 0.2s ease-in-out',

    selectors: {
      [`${wrapper}:hover &`]: {
        color: COLOR.primary400,
      },
    },
  },
])

export const tag = style({
  selectors: {
    '&::before': {
      content: '#',
      color: COLOR.primary400,
    },
  },
})

export const labelContainer = style({
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  gap: 8,
  width: 'fit-content',
  marginBottom: 8,
})

export const date = style({
  textAlign: 'end',
  marginTop: 16,
})
