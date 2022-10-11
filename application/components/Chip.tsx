import React, { DOMAttributes } from 'react'
import styled from 'styled-components'

type Props = DOMAttributes<HTMLDivElement>

const Chip = ({ children, ...rest }: Props) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

export default Chip

const Wrapper = styled.div`
  width: fit-content;
  border-radius: 4px;
  padding: 4px 8px;

  color: ${({ theme }) => theme.color.lightBlack};
  ${({ theme }) => theme.font.body_5};
  cursor: pointer;
`
