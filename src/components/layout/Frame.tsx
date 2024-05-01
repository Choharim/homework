import { combineClassName } from '@/styles/mixin'
import React, { PropsWithChildren } from 'react'
import * as style from './style/frame.css'
interface Props {
  className?: string
  as?: React.ElementType
}
const Frame = ({ children, className, as }: PropsWithChildren<Props>) => {
  const Component = as || 'div'

  const _className = combineClassName(className, style.wrapper)
  return (
    <Component className={_className} as={as}>
      {children}
    </Component>
  )
}

export default Frame
