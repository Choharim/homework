import React from 'react'
import styled from 'styled-components'

interface Props
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  children: React.ReactNode
}

const Chip = ({ children, ...rest }: Props) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

export default Chip

const Wrapper = styled.div`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 30px;

  ${({ theme }) => theme.font.body_4};
  color: ${({ theme }) => theme.color.grey700};
  background-color: ${({ theme }) => theme.color.grey100};

  &:hover {
    background-color: ${({ theme }) => theme.color.grey200};
  }
`
