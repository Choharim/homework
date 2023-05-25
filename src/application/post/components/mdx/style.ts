import { Theme, css } from '@emotion/react'

import FONT from '@/styles/constants/font'

export const HeaderFont = (theme: Theme) => css`
  color: ${theme.color.grey800};
`
export const ParagrahFont = css`
  ${FONT.body_1};
`

export const ListContainer = css`
  list-style-position: inside;
  margin-left: 8px;
`

export const HighlightWord = (theme: Theme) => css`
  display: inline;
  padding: 4px 8px;

  ${FONT.title_3};
  color: ${theme.color.grey900};
  background-color: ${theme.color.grey100};
  border-radius: 6px;
`
export const HighlightBlock = (theme: Theme) => css`
  margin: 15px 0;
  padding: 15px 20px;
  border: 1.5px dashed ${theme.color.primary400};
  border-radius: 15px;

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`
