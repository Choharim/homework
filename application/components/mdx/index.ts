import styled, { css } from 'styled-components'

import {
  Block,
  ForwardDash,
  HighlightWord,
  ListContainer,
  ParagrahFont,
} from './style'
import Code from './Code'

const MDX_STYLE = {
  h1: styled.h1`
    ${({ theme }) => theme.font.header_2};

    margin: 30px 0;
    padding: 0 10px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray};

    &::before {
      content: '✔️';
      margin-right: 5px;
    }

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_3};
        margin: 25px 0;
        padding-bottom: 8px;
      }
      ${theme.media.mobile} {
        ${theme.font.subtitle_1};
      }
    `}
  `,
  h2: styled.h2`
    ${({ theme }) => theme.font.header_3};

    margin: 10px 0;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.subtitle_1};
        margin: 8px 0;
      }
    `}
  `,
  h3: styled.h3`
    ${({ theme }) => theme.font.subtitle_1};

    margin: 10px 0;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.subtitle_2};
        margin: 5px 0;
      }
    `}
  `,
  p: styled.p`
    ${ParagrahFont}
    margin-bottom: 5px;

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

    > li {
      ${ForwardDash}
    }
  `,
  li: styled.li`
    ${ParagrahFont}

    margin: 10px 0;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        margin: 8px 0;
      }
    `}
  `,
  blockquote: styled.blockquote`
    ${Block()}
  `,
  code: Code,
}

export default MDX_STYLE
