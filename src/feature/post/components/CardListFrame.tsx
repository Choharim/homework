import MEDIA from '@/styles/constants/media'
import styled from '@emotion/styled'
import React, { ComponentProps } from 'react'

const CardListFrame = ({ children, ...props }: ComponentProps<'div'>) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default CardListFrame

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: flex-start;
  gap: 24px;
  height: 100%;

  ${MEDIA.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`
