import { color } from 'application/styles/theme'
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

export const ForwardDash = css`
  position: relative;

  &::before {
    content: '-';
    display: inline-block;
    position: absolute;
    top: 0;
    left: -20px;

    ${({ theme }) => css`
      ${theme.media.tablet} {
        left: -20px;
      }
    `}
  }
`

export const ListContainer = css`
  margin: 5px 0 26px;
  padding-inline-start: 25px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        margin: 5px 0 20px;
        padding-inline-start: 20px;
      }
    `}
`

export const HighlightWord = css`
  background-color: ${({ theme }) => theme.color.darkPink};
  color: ${({ theme }) => theme.color.red};
  ${({ theme }) => theme.font.subtitle_4};
  padding: 4px 6px;
  margin: 0 4px;
  border-radius: 2px;

  ${({ theme }) =>
    css`
      ${theme.media.tablet} {
        padding: 2px 4px;
        ${theme.font.subtitle_5};
      }
    `}
`

export const Block = (bgColor?: keyof typeof color) => css`
  margin: 24px 0 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color?.[bgColor || 'moreLightGray']};
  p {
    color: ${({ theme }) => theme.color.moreDarkGray};
    ${({ theme }) => theme.font.subtitle_3};

    code {
      ${HighlightWord}
    }
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
