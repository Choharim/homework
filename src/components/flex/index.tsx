'use client'

import { CSSProperties, ElementType, forwardRef, useMemo } from 'react'

import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import { PixelSize } from '@/shared/types/unit'
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

type FlexStyle = {
  direction: CSSProperties['flexDirection']
  justify: CSSProperties['justifyContent']
  align: CSSProperties['alignItems']
  gap: PixelSize
  wrap: CSSProperties['flexWrap']
}

export type FlexProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<FlexStyle>
>

const Flex = forwardRef(
  <E extends ElementType>(
    {
      direction = 'row',
      justify = 'normal',
      align = 'stretch',
      gap = '0px',
      wrap = 'nowrap',

      as = DEFAULT_TAG,
      children,
      className,
      ...attributes
    }: FlexProps<E | typeof DEFAULT_TAG>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const styles = useMemo(
      () => ({
        direction,
        justify,
        align,
        gap,
        wrap,
      }),
      [align, direction, gap, justify, wrap]
    )

    const _className = combineClassName(className, style.wrapper)
    const Component = as

    return (
      <Component
        {...attributes}
        className={_className}
        style={assignInlineVars(style.themeVars, styles)}
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
