import styled from 'styled-components'
import Code from './Code'
import {
  HighlightBlock,
  HighlightWord,
  ListContainer,
  ParagrahFont,
} from './style'

const MDX_STYLE = {
  h1: styled.h1`
    ${({ theme }) => theme.font.header_2};

    margin: 30px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  `,
  h2: styled.h2`
    ${({ theme }) => theme.font.header_3};

    margin: 10px 0;
  `,
  h3: styled.h3`
    ${({ theme }) => theme.font.subtitle_1};

    margin: 8px 0;
  `,
  p: styled.p`
    ${ParagrahFont}

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
      position: relative;

      &::before {
        content: '-';
        display: inline-block;
        position: absolute;
        top: 0;
        left: -25px;
      }
    }
  `,
  li: styled.li`
    ${ParagrahFont}

    margin: 10px 0;
  `,
  blockquote: styled.blockquote`
    ${HighlightBlock}
  `,
  code: Code,
}

export default MDX_STYLE
