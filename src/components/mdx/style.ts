import styled, { css } from 'styled-components'

export const HeaderFont = css`
  color: ${({ theme }) => theme.color.black};
`
export const ParagrahFont = css`
  ${({ theme }) => theme.font.body_1};
`

export const ListContainer = css`
  margin: 10px 0 30px 28px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 15px 0 15px 20px;
      }
    `}
`

export const HighlightWord = css`
  background-color: ${({ theme }) => theme.color.lightPink};
  padding: 4px 6px;
  border-radius: 2px;
`

export const BlockQuote = styled.blockquote`
  ${({ theme }) => theme.font.body_1};

  border-left: 5px solid ${({ theme }) => theme.color.moreDardPink};
  background-color: ${({ theme }) => theme.color.lightPink};
  margin: 20px 0;
  padding: 15px 10px 15px 20px;
  border-radius: 2px;

  code {
    color: ${({ theme }) => theme.color.red};
  }
`

export const HighlightBlock = css`
  margin: 10px 0 15px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.ivory};

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
    color: ${({ theme }) => theme.color.red};
    margin: 0;
    padding: 0;
  }
`
