import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { Theme, css } from '@emotion/react'

import FONT from '@/styles/constants/font'

const CustomStyleProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>
}

export default CustomStyleProvider

const headerFont = (theme: Theme) => css`
  color: ${theme.color.grey800};
`
const paragrahFont = css`
  ${FONT.body_1};
`

const listContainer = css`
  list-style-position: inside;
`

const highlightWord = (theme: Theme) => css`
  display: inline;
  padding: 4px 8px;

  ${FONT.caption_1};
  color: ${theme.color.primary800};
  background-color: ${theme.color.grey100};
  border-radius: 6px;
`

export const Provider = styled.div`
  main {
    padding: 0;
  }

  h2 {
    margin: 35px 0 20px;

    ${FONT.header_2};
    ${({ theme }) => css`
      ${headerFont(theme)}
    `}
  }

  h3 {
    margin: 30px 0 15px;

    ${FONT.header_3};
    ${({ theme }) => css`
      ${headerFont(theme)}
    `}
  }

  h4 {
    margin: 25px 0 10px;

    ${FONT.header_4};
    ${({ theme }) => css`
      ${headerFont(theme)}
    `}
  }

  div {
    ${paragrahFont};

    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }

    code {
      ${({ theme }) => css`
        ${highlightWord(theme)}
      `}
    }
  }

  strong {
    ${FONT.title_3};
    color: ${({ theme }) => theme.color.primary500};
  }

  ol {
    ${listContainer};

    list-style-type: decimal;
  }

  ul {
    ${listContainer};

    list-style-type: disc;
  }

  li {
    ${paragrahFont};

    &::marker {
      ${FONT.title_3};
    }

    code {
      ${({ theme }) => css`
        ${highlightWord(theme)}
      `}
    }
  }

  blockquote {
    padding: 6px 10px 6px 20px;
    margin: 20px 0;

    ${FONT.title_2};
    border-left: 4px solid ${({ theme }) => theme.color.primary500};
    background-color: ${({ theme }) => theme.color.grey100};
    border-radius: 2px;

    code {
      color: ${({ theme }) => theme.color.primary400};
    }
  }

  .notion-callout {
    ${({ theme }) => css`
      background-color: ${theme.color.white};
      margin: 15px 0;
      padding: 15px 20px;
      border: 1.5px dashed ${theme.color.primary400};
      border-radius: 15px;

      ul,
      ol {
        margin-top: 0;
        margin-bottom: 0;
      }

      code {
        ${highlightWord(theme)}
      }
    `}
  }
`
