import { css } from 'styled-components'

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
  margin: 10px 0 26px;
  padding-inline-start: 40px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 18px 0 20px;
        padding-inline-start: 30px;
      }
    `}
`

export const HighlightWord = css`
  background-color: ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.red};
  padding: 4px 5px;
  margin: 0 4px;
  border-radius: 2px;
`

export const HighlightBlock = css`
  margin: 24px 0 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.moreLightGray};

  p {
    color: ${({ theme }) => theme.color.moreDarkGray};
    ${({ theme }) => theme.font.subtitle_3};
  }

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 22px 0 28px;
        padding: 22px;

        p {
          ${({ theme }) => theme.font.subtitle_4};
        }
      }
    `}
`
