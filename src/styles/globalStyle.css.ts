import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const global = createGlobalTheme(':root', {
  fontFamily: {
    pretendard: `var(--font-pretendard)`,
  },
})

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  height: '100%',
  scrollBehavior: 'smooth',
  fontFamily: global.fontFamily.pretendard,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: 0,
  padding: 0,
})

globalStyle('button, input, select, code', {
  fontFamily: 'inherit',
  appearance: 'none',
  outline: 'none',
})

globalStyle('a, button, svg', {
  cursor: 'pointer',
})

globalStyle('img', {
  userSelect: 'none',
})

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

globalStyle('*', {
  boxSizing: 'border-box',
})
