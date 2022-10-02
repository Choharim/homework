import styled from 'styled-components'

export default styled.pre`
  padding: 20px;
  background-color: #282828;
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.body_2};
  border-radius: 4px;
  overflow-x: auto;
`
