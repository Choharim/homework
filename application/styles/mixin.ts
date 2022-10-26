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
  grid-auto-rows: max-content;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`
