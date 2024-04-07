import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import FONT from '@/styles/constants/font'
import { convertHEXToRGB } from '@/shared/utils/string'
import COLOR from '@/styles/constants/color'

const CustomStyleProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>
}

export default CustomStyleProvider

const headerFont = css`
  color: ${COLOR.grey800};
`
const paragrahFont = css`
  ${FONT.body_1};
  color: ${COLOR.grey900};
`

const listContainer = css`
  list-style-position: inside;
`

const highlightWord = css`
  display: inline;

  border-radius: 0px;
  padding: 0.2em 0;
  font-family: inherit;
  ${FONT.body_1};
  font-weight: 600;
  color: ${COLOR.grey900};
  background-color: rgb(${convertHEXToRGB(COLOR.primary200)}, 0.3);
`

export const Provider = styled.div`
  main {
    padding: 0;
  }

  h2 {
    margin: 35px 0 20px;

    ${FONT.header_2};
    ${headerFont};
  }

  h3 {
    margin: 30px 0 15px;

    ${FONT.header_3};
    ${headerFont};
  }

  h4 {
    margin: 25px 0 10px;

    ${FONT.header_4};
    ${headerFont};
  }

  div {
    ${paragrahFont}

    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }

    code {
      ${highlightWord}
    }
  }

  strong {
    ${FONT.title_3};
    color: ${COLOR.primary500};
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
    ${paragrahFont}

    &::marker {
      ${FONT.title_3};
    }

    code {
      ${highlightWord}
    }
  }

  blockquote {
    padding: 6px 10px 6px 20px;
    margin: 20px 0;

    ${FONT.title_2};
    border-left: 4px solid ${COLOR.primary500};
    background-color: ${COLOR.grey100};
    border-radius: 2px;

    code {
      color: ${COLOR.primary400};
    }
  }

  .notion-inline-underscore {
    text-decoration: none;
    box-shadow: inset 0 -10px 0 rgb(${convertHEXToRGB(COLOR.primary300)}, 0.7);
  }

  .notion-callout {
    ${css`
      background-color: ${COLOR.white};
      margin: 15px 0;
      padding: 15px 20px;
      border: 1.5px dashed ${COLOR.primary400};
      border-radius: 15px;

      ul,
      ol {
        margin-top: 0;
        margin-bottom: 0;
      }

      code {
        ${highlightWord}
      }
    `}
  }
`
