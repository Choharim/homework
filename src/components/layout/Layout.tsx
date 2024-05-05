import React, { HTMLAttributes, PropsWithChildren } from 'react'

import Frame from './Frame'
import Navbar from './Navbar'
import Footer from './Footer'
import Flex from '../flex'
import * as style from './style/layout.css'

interface Props extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  resetFrameStyle?: boolean
  hasFooter?: boolean
}

const Layout = ({
  resetFrameStyle,
  className,
  children,
  hasFooter = true,
}: PropsWithChildren<Props>) => {
  return (
    <Flex direction="column" className={className}>
      <Navbar />
      {resetFrameStyle ? (
        <main>{children}</main>
      ) : (
        <Frame as="main" className={style.main}>
          {children}
        </Frame>
      )}
      {hasFooter && <Footer />}
    </Flex>
  )
}

export default Layout
