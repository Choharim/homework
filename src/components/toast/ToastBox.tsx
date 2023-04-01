import React from 'react'
import styled, { keyframes } from 'styled-components'

import { TOAST_TIMEOUT, TOAST_TOP_POSITION, VARIETY } from './constant'
import { Variety } from './type'

type Props = {
  children: React.ReactNode
  variety: Variety
}
const ToastBox = ({ children, variety }: Props) => {
  return (
    <Box variety={variety}>
      <Text>{children}</Text>
    </Box>
  )
}

export default ToastBox

const fadeIn = keyframes`
from { 
  opacity: 0;
}
`

const fadeOut = keyframes`
  to { 
    opacity: 0;
  }
`

const slideIn = keyframes`
from {
  transform: translateY(${TOAST_TOP_POSITION}px)
}
`

const ANIMATED_DURATION = 300

const Box = styled.div<Pick<Props, 'variety'>>`
  padding: 10px 12px;
  border-radius: 4px;
  width: fit-content;
  min-height: 32px;

  ${({ variety }) => VARIETY[variety]};

  animation: ${fadeIn} ${ANIMATED_DURATION}ms ease,
    ${slideIn} ${ANIMATED_DURATION}ms ease,
    ${fadeOut} ${ANIMATED_DURATION}ms ease
      ${TOAST_TIMEOUT - ANIMATED_DURATION}ms;
`

const Text = styled.p`
  color: inherit;
  ${({ theme }) => theme.font.body_1};
`
