import React, { ComponentProps } from 'react'
import * as style from './cardListFrame.css'
import { combineClassName } from '@/styles/mixin'

const CardListFrame = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  const _className = combineClassName(className, style.wrapper)

  return (
    <div {...props} className={_className}>
      {children}
    </div>
  )
}

export default CardListFrame
