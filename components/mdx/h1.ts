import styled from 'styled-components'

export default styled.h1`
  ${({ theme }) => theme.font.header_2};
  color: ${({ theme }) => theme.color.black};
  margin: 30px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`
