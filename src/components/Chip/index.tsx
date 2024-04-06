import styled from '@emotion/styled'
import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import getTheme from './getTheme'

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
  { children, variety, size, color, ...rest }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  const theme = getTheme({ variety, size, color })

  return (
    <Wrapper {...rest} css={theme} ref={forwardedRef}>
      {children}
    </Wrapper>
  )
}

export default forwardRef(Chip)

const Wrapper = styled.span`
  width: fit-content;
  border-radius: 6px;
`
