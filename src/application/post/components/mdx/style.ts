import styled, { css } from 'styled-components'

import FONT from '@/styles/constants/font'
import MEDIA from '@/styles/constants/media'

export const HeaderFont = css`
  color: ${({ theme }) => theme.color.grey800};
`
export const ParagrahFont = css`
  ${FONT.body_2};
`

export const ListContainer = css`
  list-style-position: inside;
  margin-left: 13px;
`

export const HighlightWord = css`
  display: inline;
  padding: 4px 8px;
  ${FONT.title_3};
  background-color: ${({ theme }) => theme.color.grey100};
  color: ${({ theme }) => theme.color.grey800};
  border-radius: 6px;
`

export const BlockQuote = styled.blockquote`
  ${FONT.title_1};

  border-left: 4px solid ${({ theme }) => theme.color.primary500};
  background-color: ${({ theme }) => theme.color.grey100};
  margin: 20px 0;
  padding: 5px 10px 5px 20px;
  border-radius: 2px;

  code {
    color: ${({ theme }) => theme.color.primary400};
  }
`

export const HighlightBlock = css`
  margin: 10px 0 15px;
  padding: 15px;
  border: 1px dashed ${({ theme }) => theme.color.primary400};
  border-radius: 12px;

  ${MEDIA.tablet} {
    margin: 22px 0 28px;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  code {
    background-color: transparent;
    color: ${({ theme }) => theme.color.primary400};
    margin: 0;
    padding: 0;
  }
`
