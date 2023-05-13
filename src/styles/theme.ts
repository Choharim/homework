import { DefaultTheme } from 'styled-components'

import { DEVICE_SIZE } from '@/constants/layout'

export const COLOR = {
  white: '#ffffff',
  black: '#000000',
  warning: '#f66570',

  grey50: '#f9fafb',
  grey100: '#f2f4f6',
  grey200: '#e5e8eb',
  grey300: '#d1d6db',
  grey400: '#b0b8c1',
  grey500: '#8b95a1',
  grey600: '#6b7684',
  grey700: '#4e5968',
  grey800: '#333d4b',
  grey900: '#191f28',

  primary50: '#acbbff',
  primary100: '#98a7fc',
  primary200: '#8493e8',
  primary300: '#707fd4',
  primary400: '#5c6bc0',
  primary500: '#4857ac',
  primary600: '#344398',
  primary700: '#202f84',
  primary800: '#0c1b70',
} as const

export const FONT = {
  header_1: {
    fontSize: '36px',
    lineHeight: '1.3',
    fontWeight: 700,
  },
  header_2: {
    fontSize: '30px',
    lineHeight: '1.3',
    fontWeight: 600,
  },
  header_3: {
    fontSize: '26px',
    lineHeight: '1.3',
    fontWeight: 600,
  },
  header_4: {
    fontSize: '22px',
    lineHeight: '1.3',
    fontWeight: 600,
  },
  subtitle_1: {
    fontSize: '20px',
    lineHeight: '1.7',
    fontWeight: 600,
  },
  subtitle_2: {
    fontSize: '18px',
    lineHeight: '1.7',
    fontWeight: 600,
  },
  subtitle_3: {
    fontSize: '16px',
    lineHeight: '1.7',
    fontWeight: 500,
  },

  body_1: {
    fontSize: '17px',
    lineHeight: '1.7',
  },
  body_2: {
    fontSize: '16px',
    lineHeight: '1.6',
    fontWeight: 500,
  },
  body_3: {
    fontSize: '15px',
    lineHeight: '1.6',
    fontWeight: 500,
  },
  body_4: {
    fontSize: '14px',
    lineHeight: '1.6',
    fontWeight: 500,
  },
} as const

export const MEDIA = {
  mobile: `@media screen and (max-width: ${DEVICE_SIZE.tablet}px)`,
  tablet: `@media screen and (max-width: ${DEVICE_SIZE.pc}px)`,
} as const

export const THEME: DefaultTheme = {
  color: COLOR,
  font: FONT,
  media: MEDIA,
}
