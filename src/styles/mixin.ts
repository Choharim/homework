import { css } from '@emotion/react'

export const limitTextLine = (lineCount: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount}; /* number of lines to show */
  line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
`

export const rotateHalf = () => css`
  transform: rotate(180deg);
`

export const combineClassName = (...className: (string | undefined)[]) => {
  return className.join(' ')
}
