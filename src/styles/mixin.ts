import { css } from 'styled-components'

export const limitTextLine = (lineCount: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount}; /* number of lines to show */
  line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
`

export const CardListFrame = css`
  display: grid;
  gap: 20px;
  margin-top: 40px;
`
