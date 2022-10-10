import styled from 'styled-components'
import { FontColor, ListContainer, Paragrah } from './style'

const MDX_STYLE = {
  h1: styled.h1`
    ${({ theme }) => theme.font.header_2};
    ${FontColor}

    margin: 30px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  `,
  h2: styled.h2`
    ${({ theme }) => theme.font.header_3};
    ${FontColor}

    margin: 10px 0;
  `,
  h3: styled.h3`
    ${({ theme }) => theme.font.subtitle_1};
    ${FontColor}

    margin: 8px 0;
  `,
  p: styled.p`
    ${Paragrah}

    > code {
      background-color: ${({ theme }) => theme.color.lightGray};
      color: ${({ theme }) => theme.color.red};
      padding: 4px 5px;
      margin: 0 4px;
      border-radius: 2px;
    }
  `,
  pre: styled.pre`
    padding: 20px;
    background-color: #1d1f21;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.body_2};
    border-radius: 4px;
    overflow-x: auto;
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
    ${({ theme }) => theme.font.body_1};

    margin: 10px 0;
  `,
  blockquote: styled.blockquote`
    margin: 24px 0 32px;
    padding: 24px;
    background-color: ${({ theme }) => theme.color.moreLightGray};

    p {
      color: ${({ theme }) => theme.color.moreDarkGray};
      ${({ theme }) => theme.font.subtitle_3};
    }
  `,
}

export default MDX_STYLE
