import { css } from 'styled-components'

export const FontColor = css`
  color: ${({ theme }) => theme.color.black};
`

export const Paragrah = css`
  ${({ theme }) => theme.font.body_1};
  ${FontColor}
`
export const ListContainer = css`
  margin: 10px 0 26px;
  padding-inline-start: 40px;
  ${FontColor}
`
