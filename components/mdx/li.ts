import styled from 'styled-components'

export default styled.li`
  ${({ theme }) => theme.font.subtitle_2};
  color: ${({ theme }) => theme.color.lightBlack};
  margin: 7px 0;
`
