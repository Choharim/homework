import React, { PropsWithChildren } from 'react'

import Frame from './Frame'
import Navbar from './Navbar'
import Footer from './Footer'
import Flex from '../flex'
import * as style from './style/layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction="column">
      <Navbar />
      <Frame as="main" className={style.main}>
        {children}
      </Frame>
      <Footer />
    </Flex>
  )
}

export default Layout
