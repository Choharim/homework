import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { DEVICE_SIZE } from '@/constants/common'

const X_PADDING = 32

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
  max-width: ${DEVICE_SIZE.pc}px;
  margin: 0 auto;
  padding: 0 ${X_PADDING}px;
`
