import styled from 'styled-components'

export default styled.h2`
  ${({ theme }) => theme.font.header_3};
  color: ${({ theme }) => theme.color.black};
  margin: 10px 0;
`
