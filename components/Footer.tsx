import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return <Desc>© 2022 by Cho Harim </Desc>
}

export default Footer

const Desc = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`
