import styled from 'styled-components'

export default styled.code`
  background-color: ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.redLine};
  ${({ theme }) => theme.font.body_1};
  padding: 3px 5px;
  border-radius: 2px;
`
