import FONT from '@/styles/constants/font'
import styled from '@emotion/styled'
import React from 'react'

interface Props
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  children: React.ReactNode
}

const Chip = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <Wrapper {...rest} ref={ref}>
        {children}
      </Wrapper>
    )
  }
)

export default Chip

Chip.displayName = 'Chip'

const Wrapper = styled.div`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 30px;
  ${FONT.caption_1};

  color: ${({ theme }) => theme.color.grey700};
  background-color: ${({ theme }) => theme.color.grey100};

  &:hover {
    background-color: ${({ theme }) => theme.color.grey200};
  }
`
