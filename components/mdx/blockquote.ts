import styled from 'styled-components'

export default styled.blockquote`
  margin: 32px 0;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.color.moreLightGray};

  > p {
    ${({ theme }) => theme.font.body_1}
  }
`
