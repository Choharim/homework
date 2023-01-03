import styled, { css } from 'styled-components'

import {
  BlockQuote,
  HighlightWord,
  ListContainer,
  ParagrahFont,
  HeaderFont,
} from './style'
import Code from './Code'
import Picture from './Picture'

const MDX_STYLE = {
  h2: styled.h2`
    ${({ theme }) => theme.font.header_2};
    margin: 30px 0 15px;
    ${HeaderFont}

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_3};
      }
    `}
  `,
  h3: styled.h3`
    ${({ theme }) => theme.font.header_3};
    margin: 26px 0 15px;
    ${HeaderFont}

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_4};
      }
    `}
  `,

  h4: styled.h4`
    ${({ theme }) => theme.font.header_4};
    margin: 22px 0 10px;
    ${HeaderFont}

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.subtitle_1};
      }
    `}
  `,
  p: styled.p`
    ${ParagrahFont}
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }

    > code {
      ${HighlightWord}
    }
  `,
  ol: styled.ol`
    ${ListContainer}

    list-style: decimal;
  `,
  ul: styled.ul`
    ${ListContainer}

    list-style-type: disc;
  `,
  li: styled.li`
    ${ParagrahFont}

    margin: 10px 0;
    padding-left: 4px;

    > code {
      ${HighlightWord}
    }

    ${({ theme }) => css`
      ${theme.media.tablet} {
        margin: 6px 0;
      }
    `}
  `,
  blockquote: BlockQuote,
  code: Code,
  Picture,
}

export default MDX_STYLE
