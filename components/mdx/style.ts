import { css } from 'styled-components'

export const ParagrahFont = css`
  ${({ theme }) => theme.font.body_1};
`
export const ListContainer = css`
  margin: 10px 0 26px;
  padding-inline-start: 40px;
`

export const HighlightWord = css`
  background-color: ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.red};
  padding: 4px 5px;
  margin: 0 4px;
  border-radius: 2px;
`

export const HighlightBox = css`
  margin: 24px 0 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.moreLightGray};

  p {
    color: ${({ theme }) => theme.color.moreDarkGray};
    ${({ theme }) => theme.font.subtitle_3};
  }
`
