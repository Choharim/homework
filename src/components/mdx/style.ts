import styled, { css } from 'styled-components'

export const HeaderFont = css`
  color: ${({ theme }) => theme.color.primary2};
`
export const ParagrahFont = css`
  ${({ theme }) => theme.font.body_1};
`

export const ListContainer = css`
  margin: 10px 0 30px 25px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 12px 0 12px 25px;
      }
    `}
`

export const HighlightWord = css`
  display: inline;
  ${({ theme }) => theme.font.body_2};
  background-color: ${({ theme }) => theme.color.primary7};
  padding: 2px 5px;
  border-radius: 2px;
`

export const BlockQuote = styled.blockquote`
  ${({ theme }) => theme.font.subtitle_3};

  border-left: 4px solid ${({ theme }) => theme.color.line};
  background-color: ${({ theme }) => theme.color.primary8};
  margin: 20px 0;
  padding: 5px 10px 5px 20px;
  border-radius: 2px;

  code {
    color: ${({ theme }) => theme.color.pink1};
  }
`

export const HighlightBlock = css`
  margin: 10px 0 15px;
  padding: 15px;
  border: 2px dashed ${({ theme }) => theme.color.line};
  border-radius: 12px;

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
