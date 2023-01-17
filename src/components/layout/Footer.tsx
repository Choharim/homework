import React, { HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'

import { EN_NAME } from '@/domain/owner/constant'

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

const Desc = styled.footer(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: `${FOOTER_HEIGHT}px`,
  marginTop: '30px',
  color: theme.color.primary1,
  ...theme.font.body_3,
}))
