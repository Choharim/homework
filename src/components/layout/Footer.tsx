import React from 'react'
import styled from 'styled-components'

import { EN_NAME } from '@/domain/owner/constant'

export const FOOTER_HEIGHT = 100

const Footer = () => {
  return (
    <Footer.Section>
      © 2022 by {EN_NAME.last} {EN_NAME.first}
    </Footer.Section>
  )
}

export default Footer

Footer.Section = styled.footer(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: `${FOOTER_HEIGHT}px`,
  marginTop: '30px',
  color: theme.color.black,
  ...theme.font.body_1,
}))
