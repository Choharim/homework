import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { deviceSize } from 'constants/common'
import { KO_NAME } from 'entity/owner/constant'

import Navbar, { NAVBAR_HEIGHT } from './Navbar'
import Footer, { FOOTER_HEIGHT } from './Footer'

type Props = {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => {
  return (
    <LayoutFrame>
      <Head>
        {!!title && <title>{`${title} | ${KO_NAME.first}`}</title>}
        {/* @todo add meta tag */}
        {/* <meta name="meta name" content="meta content" /> */}
      </Head>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutFrame>
  )
}

export default Layout

const LayoutFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const X_PADDING = 24

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: calc(${NAVBAR_HEIGHT}px + 20px) ${X_PADDING}px;
  height: 100%;
  min-height: calc((100vh - ${FOOTER_HEIGHT}px));
  width: 100%;
  max-width: calc(${deviceSize.pc}px + ${X_PADDING}px);
`
