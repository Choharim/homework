import { globalStyle, style } from '@vanilla-extract/css'

export const base = style({
  position: 'relative',
  margin: '20px 0',
  padding: '24px 0',
  borderRadius: '3px',
  backgroundColor: '#212121',
  overflowX: 'auto',
  overflowY: 'hidden',
})

// 전역 스타일 정의
globalStyle(`${base} .comment`, {
  color: '#999',
})

globalStyle(`${base} .keyword`, {
  color: '#c490e5',
})

globalStyle(`${base} .function`, {
  color: '#81a9fd',
})

globalStyle(`${base} .operator`, {
  color: '#808080',
})

globalStyle(`${base} .string`, {
  color: '#c0e58b',
})

globalStyle(`${base} .literal-property`, {
  color: '#f8f8f2',
})

globalStyle(`${base} .imports.maybe-class-name`, {
  color: '#f8f8f2',
})

globalStyle(`${base} .parameter, ${base} .maybe-class-name`, {
  color: '#ffcb6b',
})

globalStyle(`${base} .module`, {
  color: '#88deff',
})

globalStyle(`${base} .plain`, {
  color: '#e8f8f9',
})
