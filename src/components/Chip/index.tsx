import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import * as style from './style.css'
import { combineClassName } from '@/styles/mixin'
import { assignInlineVars } from '@vanilla-extract/dynamic'

type Variety = 'solid' | 'soft' | 'surface' | 'outline'
type Size = 's' | 'm' | 'l'
type Color = 'primary'

export type ChipStyle = {
  variety: Variety
  size: Size
  color: Color
}

interface Props
  extends Omit<ComponentPropsWithoutRef<'span'>, 'color'>,
    ChipStyle {}

const Chip = (
  { variety, size, color, children, className, ...rest }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  const _className = combineClassName(className, style.chip({ variety, size }))
  const colorVariant = style.COLOR_VARIANT[color]

  return (
    <span
      {...rest}
      className={_className}
      ref={forwardedRef}
      style={assignInlineVars({
        [style.vars.accent]: colorVariant.accent,
        [style.vars.accentContrast]: colorVariant.accentContrast,
        [style.vars.accentHalf]: colorVariant.accentHalf,
      })}
    >
      {children}
    </span>
  )
}

export default forwardRef(Chip)
