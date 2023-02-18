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
import Outlink from './Outlink'

const MDX_STYLE = {
  h2: styled.h2`
    ${({ theme }) => theme.font.header_2};
    margin: 40px 0 20px;
    ${HeaderFont}

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_3};
      }
    `}
  `,
  h3: styled.h3`
    ${({ theme }) => theme.font.header_3};
    margin: 15px 0 10px;
    ${HeaderFont}

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_4};
      }
    `}
  `,

  h4: styled.h4`
    ${({ theme }) => theme.font.header_4};
    margin: 15px 0 10px;
    ${HeaderFont}

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.subtitle_1};
      }
    `}
  `,
  p: styled.p`
    ${ParagrahFont}
    margin-bottom: 10px;
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
    > li {
      &::marker {
        font-weight: bold;
      }
    }
  `,
  ul: styled.ul`
    ${ListContainer}

    list-style-type: disc;
  `,
  li: styled.li`
    ${ParagrahFont}

    margin: 6px 0;
    > code {
      ${HighlightWord}
    }
  `,
  blockquote: BlockQuote,
  code: Code,
  Picture,
  a: Outlink,
}

export default MDX_STYLE
