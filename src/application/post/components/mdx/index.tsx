import styled from 'styled-components'

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
import FONT from '@/styles/constants/font'

const MDX_STYLE = {
  h2: styled.h2`
    ${FONT.header_2};
    margin: 30px 0 20px;
    ${HeaderFont}
  `,
  h3: styled.h3`
    ${FONT.header_3};
    margin: 15px 0 10px;
    ${HeaderFont}
  `,

  h4: styled.h4`
    ${FONT.header_4};
    margin: 15px 0 10px;
    ${HeaderFont}
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

    list-style-type: decimal;
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
