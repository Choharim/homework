import { EN_NAME } from 'entity/owner/constant'
import React from 'react'
import styled from 'styled-components'

export const FOOTER_HEIGHT = 100

const Footer = () => {
  return (
    <Desc>
      © 2022 by {EN_NAME.last} {EN_NAME.first}
    </Desc>
  )
}

export default Footer

const Desc = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${FOOTER_HEIGHT}px;
`
