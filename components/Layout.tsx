import React from 'react'
import styled, { css } from 'styled-components'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

type LayoutStyle = {
  isFitPage?: boolean
}

type Props = LayoutStyle & {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title, ...rest }: Props) {
  return (
    <LayoutFrame {...rest}>
      <Navbar />
      <Head>
        {!!title && <title>{title}</title>}
        {/* @todo add meta tag */}
        {/* <meta name="meta name" content="meta content" /> */}
      </Head>
      <Main>{children}</Main>
      <Footer />
    </LayoutFrame>
  )
}

const LayoutFrame = styled.div<LayoutStyle>`
  display: flex;
  flex-direction: column;

  ${({ isFitPage }) =>
    isFitPage
      ? css`
          height: 100vh;
        `
      : css`
          min-height: 100vh;
        `}
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
`
