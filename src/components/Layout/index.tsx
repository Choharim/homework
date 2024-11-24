import React, { ComponentProps, PropsWithChildren } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import Flex from '../Flex'
import Frame from './Frame'
import * as style from './index.css'
interface Props extends Pick<ComponentProps<'div'>, 'className'> {
  resetFrameStyle?: boolean
}

const Layout = ({
  resetFrameStyle,
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Flex direction="column" className={className}>
      <Navbar />
      {resetFrameStyle ? (
        <main>{children}</main>
      ) : (
        <Frame as="main" className={style.frame}>
          {children}
        </Frame>
      )}
      <Footer />
    </Flex>
  )
}

export default Layout
