import { DefaultTheme } from 'styled-components'

import { DEVICE_SIZE } from '@/constants/common'

export const color = {
  white: '#ffffff',
  black: '#000000',

  gray1: '#3f3c39',
  gray2: '#7b7875',
  gray3: '#b7b4b1',
  gray4: '#f3f0ed',

  pink1: '#ec5b5b',
  pink2: '#fbac9c',
  pink3: '#ffdcd6',
  pink4: '#ffe2dd',
  pink5: '#feece8',

  blue1: '#8fc5e7',
  blue2: '#c0d9e8',
  blue3: '#d3e4ef',

  green1: '#afc7af',
  green2: '#d1e3d1',
  green3: '#dbeddb',

  purple1: '#bca2ca',
  purple2: '#dfd3e6',
  purple3: '#e6ddeb',

  primary1: '#372f25',
  primary2: '#52473a',
  primary3: '#66594a',
  primary4: '#7e7265',
  primary5: '#9b8f81',
  primary6: '#b8ac9f',
  primary7: '#d5cabf',

  bg: '#faf2e8',
  line: '#66594a',
} as const

export const font = {
  header_1: {
    fontSize: '34px',
    lineHeight: '1.2',
    fontWeight: 700,
  },
  header_2: {
    fontSize: '28px',
    lineHeight: '1.3',
    fontWeight: 700,
  },
  header_3: {
    fontSize: '24px',
    lineHeight: '1.3',
    fontWeight: 700,
  },
  header_4: {
    fontSize: '22px',
    lineHeight: '1.3',
    fontWeight: 700,
  },
  subtitle_1: {
    fontSize: '20px',
    lineHeight: '1.4',
    fontWeight: 600,
  },
  subtitle_2: {
    fontSize: '18px',
    lineHeight: '1.4',
    fontWeight: 550,
  },
  subtitle_3: {
    fontSize: '18px',
    lineHeight: '1.4',
    fontWeight: 500,
  },

  body_1: {
    fontSize: '17px',
    lineHeight: '1.5',
  },
  body_2: {
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 500,
  },
  body_3: {
    fontSize: '15px',
    lineHeight: '1.5',
    fontWeight: 500,
  },
  body_4: {
    fontSize: '14px',
    lineHeight: '1.5',
    fontWeight: 500,
  },
} as const

export const media = {
  mobile: `@media screen and (max-width: ${DEVICE_SIZE.tablet}px)`,
  tablet: `@media screen and (max-width: ${DEVICE_SIZE.pc}px)`,
} as const

export const theme: DefaultTheme = {
  color,
  font,
  media,
}
