import styled, { css } from 'styled-components'

export const ParagrahFont = css`
  ${({ theme }) => theme.font.body_1};

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        ${theme.font.body_2};
      }
    `}
`

export const ListContainer = css`
  margin: 20px 0 20px 28px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 15px 0 15px 20px;
      }
    `}
`

export const HighlightWord = css`
  ${({ theme }) => theme.font.body_1};
  background-color: ${({ theme }) => theme.color.lightPink};
  padding: 4px 8px;
  margin: 0 4px;
  border-radius: 2px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        ${theme.font.body_2};
      }
    `}
`

export const BlockQuote = styled.blockquote`
  ${({ theme }) => theme.font.body_1};

  border-left: 5px solid ${({ theme }) => theme.color.darkPink};
  margin: 25px 0;
  padding-left: 20px;
`

export const HighlightBlock = css`
  margin: 24px 0 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.ivory};

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 22px 0 28px;
        padding: 20px;
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
