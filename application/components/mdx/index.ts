import styled, { css } from 'styled-components'

import { BlockQuote, HighlightWord, ListContainer, ParagrahFont } from './style'
import Code from './Code'
import Picture from './Picture'

const MDX_STYLE = {
  h2: styled.h2`
    ${({ theme }) => theme.font.header_2};

    margin: 30px 0 15px;

    &::before {
      content: '✔️';
      margin-right: 5px;
    }

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.header_3};
      }
    `}
  `,
  h3: styled.h3`
    ${({ theme }) => theme.font.header_3};

    margin: 20px 0 10px;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.subtitle_1};
      }
    `}
  `,
  h4: styled.h4`
    ${({ theme }) => theme.font.subtitle_1};

    margin: 15px 0 10px;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        ${theme.font.subtitle_2};
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

    list-style-type: disc;
  `,
  li: styled.li`
    ${ParagrahFont}

    margin: 10px 0;

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
