import styled from 'styled-components'

export default styled.p`
  > code {
    background-color: ${({ theme }) => theme.color.lightGray};
    color: ${({ theme }) => theme.color.red};
    ${({ theme }) => theme.font.body_1};
    padding: 3px 5px;
    margin: 0 4px;
    border-radius: 2px;
  }
`
