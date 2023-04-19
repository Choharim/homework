import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { DEVICE_SIZE } from '@/constants/layout'

const X_PADDING = 20

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  asTag?: React.ElementType | keyof JSX.IntrinsicElements
}
const Frame = ({ children, className, asTag }: Props) => {
  return (
    <Frame.Layout className={className} as={asTag}>
      {children}
    </Frame.Layout>
  )
}

export default Frame

Frame.Layout = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${DEVICE_SIZE.tablet}px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${X_PADDING}px;
  }
`
