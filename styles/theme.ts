import { deviceSize } from 'constants/common'
import { DefaultTheme } from 'styled-components'

export const color = {
  white: '#ffffff',

  moreLightGray: '#F2F2F2',
  lightGray: '#e6e6e6',
  gray: '#bcbcbc',
  darkGray: '#707070',
  moreDarkGray: '#4D4D4D',

  lightBlack: '#454545',
  black: '#000000',

  brown: '#b09b88',

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
    fontSize: '32px',
    lineHeight: '42px',
    fontWeight: 700,
  },
  header_2: {
    fontSize: '28px',
    lineHeight: '40px',
    fontWeight: 700,
  },
  header_3: {
    fontSize: '24px',
    lineHeight: '35px',
    fontWeight: 700,
  },
  header_4: {
    fontSize: '22px',
    lineHeight: '33px',
    fontWeight: 700,
  },
  subtitle_1: {
    fontSize: '21px',
    lineHeight: '27px',
    fontWeight: 600,
  },
  subtitle_2: {
    fontSize: '19px',
    lineHeight: '26px',
    fontWeight: 600,
  },
  subtitle_3: {
    fontSize: '17px',
    lineHeight: '25px',
    fontWeight: 600,
  },
  subtitle_4: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  subtitle_5: {
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 600,
  },
  body_1: {
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 550,
  },
  body_2: {
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 500,
  },
  body_3: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
  },
  body_4: {
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 500,
  },
  body_5: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 500,
  },
  body_6: {
    fontSize: '11px',
    lineHeight: '15px',
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
