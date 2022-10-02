import { deviceSize } from 'constants/common'
import { DefaultTheme } from 'styled-components'

export const color = {
  white: '#ffffff',
  lightGray: '#e6e6e6',
  midleGray: '#bcbcbc',
  gray: '#707070',
  darkGray: '#4D4D4D',
  lightBlack: '#1a1b1e',
  black: '#000000',
  red: '#ffe2dd',
  redLine: '#ec5b5b',
  blue: '#d3e4ef',
  green: '#dbeddb',
  orange: '#f9dec9',
  yellow: '#fdecc8',
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
  subtitle_1: {
    fontSize: '22px',
    lineHeight: '27px',
    fontWeight: 600,
  },
  subtitle_2: {
    fontSize: '18px',
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
    lineHeight: '25px',
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
    fontSize: '14px',
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
    lineHeight: '20px',
    fontWeight: 600,
  },
  body_5: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
  },
  body_6: {
    fontSize: '11px',
    lineHeight: '15px',
    fontWeight: 500,
  },
} as const

export const media = {
  mobile: `@media screen and (max-width: ${deviceSize.mobile}px)`,
  tablet: `@media screen and (max-width: ${deviceSize.tablet}px)`,
} as const

export const theme: DefaultTheme = {
  color,
  font,
  media,
}
