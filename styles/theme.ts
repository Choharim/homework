import { DefaultTheme } from 'styled-components'

export const colors = {
  white: '#ffffff',
  lightGray: '#e6e6e6',
  gray: '#707070',
  darkGray: '#4D4D4D',
  lightBlack: '#1a1b1e',
  black: '#000000',
  red: '#ffe2dd',
  blue: '#d3e4ef',
  green: '#dbeddb',
  orange: '#f9dec9',
  yellow: '#fdecc8',
} as const

export const theme: DefaultTheme = {
  colors,
}
