import { CSSProperties, ElementType, forwardRef, useMemo } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import { ColorKey, FontKey } from '@/styles/type'
import FONT from '@/styles/constants/font'
import COLOR from '@/styles/constants/color'

const DEFAULT_TAG: ElementTag = 'span'

type ElementTag = Extract<
  ElementType,
  'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'time'
>

export type TypoStyle = {
  variety: FontKey
  color: ColorKey | 'inherit'
  wrap: CSSProperties['whiteSpace']
}

export type TypoProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<TypoStyle>
>

const Typo = forwardRef(
  <E extends ElementType>(
    {
      variety = 'body_1',
      color = 'black',
      wrap,
      as,
      children,
      ...attributes
    }: TypoProps<E | typeof DEFAULT_TAG>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const styles = useMemo(
      () => ({ variety: variety, color: color, wrap: wrap }),
      [variety, color, wrap]
    )

    return (
      <TypoWrapper {...attributes} {...styles} ref={forwardRef} as={as}>
        {children}
      </TypoWrapper>
    )
  }
)

/**
 * @description
 * forwardRef에 제네릭을 적용하면 prop 타입이 추론되지 않아
 * 타입 단언을 합니다.
 * @issue
 * styledComponent에서 as prop을 사용할 경우
 * - prop의 타입은 StyledComponentPropsWithAs 지정되고, as의 타입은 any로 추론됩니다.
 * - as로 지정한 elementType의 고유 property 타입을 추론하지 못합니다.
 *
 * Typo의 경우 타입 단언으로 이에 대한 문제가 없으나, styled로 재확장하고 as prop을 지정할 경우
 * 위의 문제가 동일하게 발생합니다.
 * @issue
 * styled로 재확장하고 as prop을 사용할 경우, styledComponent와의 타입 충돌로 Typo의 customProp 관련 타입 오류가 납니다.
 * 이러한 이유로 elementType을 지정하기 위해 as가 아닌 asTag로 지정합니다.
 */
export default Typo as <E extends ElementTag>(
  props: TypoProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Typo>

Typo.displayName = 'Typo'

const TypoWrapper = styled(DEFAULT_TAG)<TypoStyle>`
  ${({ variety, color, wrap }) => css`
    ${FONT[variety]};
    color: ${color === 'inherit' ? 'inherit' : COLOR[color]};
    white-space: ${wrap};
  `};
`
