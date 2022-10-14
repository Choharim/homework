import React from 'react'
import styled from 'styled-components'

import { EN_NAME } from 'domain/owner/constant'

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

  ${({ theme }) => theme.font.subtitle_4}
`
