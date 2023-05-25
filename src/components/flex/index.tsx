import { CSSProperties, ElementType, forwardRef, useMemo } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '@/shared/types/polymorphic'

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
>

type FlexStyle = {
  direction: CSSProperties['flexDirection']
  justify: CSSProperties['justifyContent']
  align: CSSProperties['alignItems']
  gap: CSSProperties['gap']
  wrap: CSSProperties['flexWrap']
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
      ...attributes
    }: FlexProps<E | typeof DEFAULT_TAG>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const styles = useMemo(
      () => ({
        direction: direction,
        justify: justify,
        align: align,
        gap: gap,
        wrap: wrap,
      }),
      [direction, justify, align, gap, wrap]
    )

    return (
      <FlexWrapper {...attributes} {...styles} ref={forwardRef} as={as}>
        {children}
      </FlexWrapper>
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

const FlexWrapper = styled(DEFAULT_TAG)<FlexStyle>`
  display: flex;

  ${({ direction, justify, align, gap, wrap }) => css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `};
`
