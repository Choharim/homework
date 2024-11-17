import { ElementType, forwardRef, useMemo } from 'react'

import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import { ColorKey, FontKey } from '@/styles/type'

import { combineClassName, limitTextLine } from '@/styles/mixin'
import * as style from './style.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { themeVars } from './style.css'
import COLOR from '@/styles/constants/color'

const DEFAULT_TAG: ElementTag = 'span'

type ElementTag = Extract<
  ElementType,
  'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'time'
>

type StyleProps = {
  variety: FontKey
  color: ColorKey | 'inherit'
  lineClamp?: number
}

export type TypoProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<StyleProps>
>

const Typo = forwardRef(
  <E extends ElementType>(
    {
      variety = 'body_1',
      color = 'black',
      lineClamp,
      as = DEFAULT_TAG,
      children,
      className,
      ...attributes
    }: TypoProps<E | typeof DEFAULT_TAG>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const styles = useMemo(
      () => ({
        color: color === 'inherit' ? 'inherit' : COLOR[color],
      }),
      [color]
    )

    const _className = combineClassName(
      className,
      style.wrapper,
      style.variety[variety]
    )
    const Component = as

    return (
      <Component
        {...attributes}
        className={_className}
        style={{
          ...attributes.style,
          ...(lineClamp ? limitTextLine(lineClamp) : {}),
          ...assignInlineVars(themeVars, styles),
        }}
        ref={forwardRef}
        as={as}
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
 * @issue
 * styled로 재확장하고 as prop을 사용할 경우, elementType의 고유 property 타입을 추론하지 못합니다.
 * ex) label의 htmlFor
 */
export default Typo as <E extends ElementTag>(
  props: TypoProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Typo>

Typo.displayName = 'Typo'
