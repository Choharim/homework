import React from 'react'

import Flex from '../Flex'
import Typo from '../Typo'

import { Variety } from './_types'
import * as style from './toastBox.css'
import { combineClassName } from '@/styles/mixin'
export interface ToastBoxStyle {
  variety: Variety
}

interface ToastBoxProps extends ToastBoxStyle {
  children: React.ReactNode
}
const ToastBox = ({ children, variety }: ToastBoxProps) => {
  const _className = combineClassName(style.wrapper, style.variety[variety])

  return (
    <Flex justify="center" className={_className}>
      <Typo color="inherit">{children}</Typo>
    </Flex>
  )
}

export default ToastBox
