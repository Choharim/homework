import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'

const CardListFrame = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>
}

export default CardListFrame

const Wrapper = styled.div`
  display: grid;
  align-content: flex-start;
  gap: 40px;
  height: 100%;
`
