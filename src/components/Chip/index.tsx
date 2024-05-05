import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import * as style from './style.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { COLOR_TYPE_BY_VARIETY } from './style.css'
import { combineClassName } from '@/styles/mixin'

type Variety = 'solid' | 'soft' | 'surface' | 'outline'
type Size = 's' | 'm' | 'l'
type Color = 'grey' | 'primary'

export type Theme = {
  variety: Variety
  size: Size
  color: Color
}

interface Props
  extends Omit<ComponentPropsWithoutRef<'span'>, 'color'>,
    Theme {}

const Chip = (
  { children, className, variety, size, color, ...rest }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  const { accent, accentContrast, accentHalf } = COLOR_TYPE_BY_VARIETY[color]
  const _className = combineClassName(
    className,
    style.wrapper,
    style.size[size],
    style.variety[variety]
  )

  return (
    <span
      {...rest}
      className={_className}
      ref={forwardedRef}
      style={assignInlineVars({
        [style.accentVar]: accent,
        [style.accentContrastVar]: accentContrast,
        [style.accentHalfVar]: accentHalf,
      })}
    >
      {children}
    </span>
  )
}

export default forwardRef(Chip)
