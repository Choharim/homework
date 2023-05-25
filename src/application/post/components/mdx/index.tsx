import styled from '@emotion/styled'

import { HighlightWord, ListContainer, ParagrahFont, HeaderFont } from './style'
import Code from './Code'
import Picture from './Picture'
import Outlink from './Outlink'
import FONT from '@/styles/constants/font'
import { css } from '@emotion/react'

const MDX_STYLE = {
  h2: styled.h2`
    margin: 35px 0 20px;

    ${FONT.header_2};
    ${({ theme }) => css`
      ${HeaderFont(theme)}
    `}
  `,
  h3: styled.h3`
    margin: 30px 0 15px;

    ${FONT.header_3};
    ${({ theme }) => css`
      ${HeaderFont(theme)}
    `}
  `,

  h4: styled.h4`
    margin: 25px 0 10px;

    ${FONT.header_4};
    ${({ theme }) => css`
      ${HeaderFont(theme)}
    `}
  `,
  p: styled.p`
    ${ParagrahFont};

    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }

    > code {
      ${({ theme }) => css`
        ${HighlightWord(theme)}
      `}
    }
  `,
  strong: styled.strong`
    ${FONT.title_3};
    color: ${({ theme }) => theme.color.primary500};
  `,
  ol: styled.ol`
    ${ListContainer};

    list-style-type: decimal;
  `,
  ul: styled.ul`
    ${ListContainer};

    list-style-type: disc;
  `,
  li: styled.li`
    margin: 8px 0;
    ${ParagrahFont};

    &::marker {
      ${FONT.title_3};
    }

    > code {
      ${({ theme }) => css`
        ${HighlightWord(theme)}
      `}
    }
  `,
  blockquote: styled.blockquote`
    padding: 8px 10px 8px 20px;
    margin: 20px 0;

    ${FONT.title_1};
    border-left: 4px solid ${({ theme }) => theme.color.primary500};
    background-color: ${({ theme }) => theme.color.grey100};
    border-radius: 2px;

    code {
      color: ${({ theme }) => theme.color.primary400};
    }
  `,
  code: Code,
  Picture,
  a: Outlink,
}

export default MDX_STYLE
