import styled from '@emotion/styled'
import React, { ComponentProps } from 'react'

const CardListFrame = ({ children, ...props }: ComponentProps<'div'>) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default CardListFrame

const Wrapper = styled.div`
  display: grid;
  align-content: flex-start;
  gap: 40px;
  height: 100%;
`
