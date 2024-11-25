'use client'
import { CSSProperties, ElementType, forwardRef } from 'react'

import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '@/shared/_types'
import { combineClassName } from '@/styles/mixin'
import * as style from './style.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

const DEFAULT_TAG: ElementTag = 'div'

type ElementTag = Extract<
  ElementType,
  | 'div'
  | 'form'
  | 'section'
  | 'nav'
  | 'article'
  | 'aside'
  | 'ol'
  | 'ul'
  | 'label'
  | 'footer'
>

export type FlexStyle = {
  display: 'none' | 'inline-flex' | 'flex'
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify: 'start' | 'center' | 'end' | 'between'
  align: 'start' | 'center' | 'end' | 'baseline'
  gap: CSSProperties['gap']
  wrap: 'wrap' | 'nowrap'
}

export type FlexProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<FlexStyle>
>

const Flex = forwardRef(
  <E extends ElementType>(
    {
      direction,
      justify,
      align,
      gap,
      wrap,

      as = DEFAULT_TAG,
      children,
      className,
      ...attributes
    }: FlexProps<E | typeof DEFAULT_TAG>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const _className = combineClassName(
      className,
      style.flex({
        direction,
        justify,
        align,
        wrap,
      })
    )

    const Component = as

    return (
      <Component
        {...attributes}
        className={_className}
        style={assignInlineVars(style.vars, {
          gap: `${gap}`,
        })}
        ref={forwardRef}
      >
        {children}
      </Component>
    )
  }
)

/**
 * @description
 * forwardRef에 제네릭을 적용하면 prop 타입이 추론되지 않아
 * 타입 단언을 합니다.
 */
export default Flex as <E extends ElementTag>(
  props: PolymorphicComponentPropsWithRef<E, FlexProps<E>>
) => ReturnType<typeof Flex>

Flex.displayName = 'Flex'
