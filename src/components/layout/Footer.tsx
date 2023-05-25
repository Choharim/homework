import React, { HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'

import { EN_NAME } from '@/domain/owner/constant'
import FONT from '@/styles/constants/font'

export const FOOTER_HEIGHT = 100

/**
 * @remarks
 * selector로 스타일을 추가할 때 스타일을 적용시키기 위해 className 전달 필요
 */
type Props = Pick<HtmlHTMLAttributes<HTMLElement>, 'className'>
const Footer = ({ className }: Props) => {
  return (
    <Desc className={className}>
      © 2022 by {EN_NAME.last} {EN_NAME.first}
    </Desc>
  )
}

export default Footer

const Desc = styled.footer`
  display: flex;
  align-items: center;
  width: '100%';
  margin: 0 auto;
  color: ${({ theme }) => theme.color.grey700};
  height: ${FOOTER_HEIGHT}px;
  ${FONT.body_1};
`
