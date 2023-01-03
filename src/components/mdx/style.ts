import styled, { css } from 'styled-components'

export const HeaderFont = css`
  color: ${({ theme }) => theme.color.primary3};
`
export const ParagrahFont = css`
  ${({ theme }) => theme.font.body_1};
`

export const ListContainer = css`
  margin: 10px 0 30px 25px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 15px 0 15px 20px;
      }
    `}
`

export const HighlightWord = css`
  display: inline-block;
  ${({ theme }) => theme.font.body_2};
  background-color: ${({ theme }) => theme.color.pink3};
  padding: 0px 5px;
  border-radius: 2px;
`

export const BlockQuote = styled.blockquote`
  ${({ theme }) => theme.font.body_1};

  border-left: 5px solid ${({ theme }) => theme.color.pink2};
  background-color: ${({ theme }) => theme.color.pink5};
  margin: 20px 0;
  padding: 5px 10px 5px 20px;
  border-radius: 2px;

  code {
    color: ${({ theme }) => theme.color.pink1};
  }
`

export const HighlightBlock = css`
  margin: 10px 0 15px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.primary7};

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 22px 0 28px;
      }
    `}

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  code {
    background-color: transparent;
    color: ${({ theme }) => theme.color.pink1};
    margin: 0;
    padding: 0;
  }
`
