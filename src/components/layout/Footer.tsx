import React, { HtmlHTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { EN_NAME } from '@/feature/app/constants/owner'
import FONT from '@/styles/constants/font'
import COLOR from '@/styles/constants/color'

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
  color: ${COLOR.grey900};
  height: ${FOOTER_HEIGHT}px;
  ${FONT.body_1};
`
