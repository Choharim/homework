import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

import { DEVICE_SIZE } from '@/constants/layout'
import MEDIA from '@/styles/constants/media'

const X_PADDING = 20

interface Props {
  className?: string
  as?: React.ElementType
}
const Frame = ({ children, className, as }: PropsWithChildren<Props>) => {
  return (
    <Frame.Layout className={className} as={as}>
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

  ${MEDIA.tablet} {
    padding-left: ${X_PADDING}px;
    padding-right: ${X_PADDING}px;
  }
`
