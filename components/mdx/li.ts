import styled from 'styled-components'

export default styled.li`
  ${({ theme }) => theme.font.subtitle_2};
  color: ${({ theme }) => theme.color.black};
  margin: 7px 0;
`
