import React from 'react'
import _Layout from '@/components/Layout'

function Layout({ children }: { children: React.ReactNode }) {
  return <_Layout resetFrameStyle>{children}</_Layout>
}

export default Layout
