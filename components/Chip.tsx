import React, { DOMAttributes } from 'react'
import styled from 'styled-components'

interface Props extends DOMAttributes<HTMLDivElement> {
  bgColor?: string
}

const Chip = ({ bgColor, children, ...rest }: Props) => {
  return (
    <Wrapper bgColor={bgColor} {...rest}>
      {children}
    </Wrapper>
  )
}

export default Chip

const Wrapper = styled.div<Pick<Props, 'bgColor'>>`
  width: fit-content;
  border-radius: 4px;
  padding: 4px 8px;

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.color.lightBlack};
  ${({ theme }) => theme.font.body_5};
  cursor: pointer;
`
