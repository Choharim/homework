import { DefaultTheme } from 'styled-components'

import { deviceSize } from 'application/constants/common'

export const color = {
  white: '#ffffff',

  moreLightGray: '#F2F2F2',
  lightGray: '#ededeb',
  gray: '#bcbcbc',
  darkGray: '#707070',
  moreDarkGray: '#4D4D4D',

  lightBlack: '#4d5052',
  black: '#000000',

  brown: '#b09b88',
  ivory: '#faecdd',

  lightPink: '#feece8',
  pink: '#ffe2dd',
  darkPink: '#ffdcd6',
  moreDardPink: '#fbac9c',
  red: '#ec5b5b',

  blue: '#d3e4ef',
  darkBlue: '#c0d9e8',
  moreDarkBlue: '#8fc5e7',
  green: '#dbeddb',
  orange: '#f9dec9',
  yellow: '#fdecc8',
  darkYellow: '#fde7c8',
  moreDarkYellow: '#fdcb84',
} as const

export const font = {
  header_1: {
    fontSize: '34px',
    lineHeight: '1.3em',
    fontWeight: 700,
  },
  header_2: {
    fontSize: '30px',
    lineHeight: '1.4em',
    fontWeight: 700,
  },
  header_3: {
    fontSize: '26px',
    lineHeight: '1.5em',
    fontWeight: 700,
  },
  subtitle_1: {
    fontSize: '22px',
    lineHeight: '1.7em',
    fontWeight: 600,
  },
  subtitle_2: {
    fontSize: '18px',
    lineHeight: '1.8em',
    fontWeight: 600,
  },

  body_1: {
    fontSize: '16px',
    lineHeight: '1.9em',
    fontWeight: 500,
  },
  body_2: {
    fontSize: '14px',
    lineHeight: '2.0em',
    fontWeight: 500,
  },
  body_3: {
    fontSize: '12px',
    lineHeight: '2.1em',
    fontWeight: 500,
  },
} as const

export const media = {
  mobile: `@media screen and (max-width: ${deviceSize.tablet}px)`,
  tablet: `@media screen and (max-width: ${deviceSize.pc}px)`,
} as const

export const theme: DefaultTheme = {
  color,
  font,
  media,
}
