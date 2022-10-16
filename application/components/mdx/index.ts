import styled, { css } from 'styled-components'

import { BlockQuote, HighlightWord, ListContainer, ParagrahFont } from './style'
import Code from './Code'

const MDX_STYLE = {
  h2: styled.h2`
    ${({ theme }) => theme.font.header_2};

    margin: 80px 0 32px;

    &::before {
      content: '✔️';
      margin-right: 5px;
    }

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_3};
      }
      ${theme.media.mobile} {
        ${theme.font.header_4};
      }
    `}
  `,
  h3: styled.h3`
    ${({ theme }) => theme.font.header_3};

    margin: 55px 0 22px;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_4};
      }
      ${theme.media.mobile} {
        ${theme.font.subtitle_1};
      }
    `}
  `,
  h4: styled.h4`
    ${({ theme }) => theme.font.header_4};

    margin: 40px 0 18px;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.subtitle_1};
      }
      ${theme.media.mobile} {
        ${theme.font.subtitle_2};
      }
    `}
  `,
  p: styled.p`
    ${ParagrahFont}
    margin-bottom: 10px;

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

    ${({ theme }) => css`
      ${theme.media.tablet} {
        margin: 6px 0;
      }
    `}
  `,
  blockquote: BlockQuote,
  code: Code,
}

export default MDX_STYLE
