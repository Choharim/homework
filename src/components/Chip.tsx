import FONT from '@/styles/constants/font'
import styled from '@emotion/styled'
import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'

interface Props extends ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode
}

const Chip = (
  { children, ...rest }: Props,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) => {
  return (
    <Wrapper {...rest} ref={forwardedRef}>
      {children}
    </Wrapper>
  )
}

export default forwardRef(Chip)

const Wrapper = styled.span`
  width: fit-content;
  padding: 4px 10px;
  border-radius: 6px;
  ${FONT.caption_1};

  color: ${({ theme }) => theme.color.primary400};
  background-color: ${({ theme }) => theme.color.grey100};

  &:hover {
    background-color: ${({ theme }) => theme.color.grey200};
  }
`
