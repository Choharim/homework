import { Global } from '@emotion/react'

import Layout from '@/components/layout/Layout'
import MetaHead from '@/components/seo/MetaHead'

import resetStyle from '@/styles/resetStyle'

import { AppPropsWithLayout, GetLayout } from '@/shared/types/layout'
import ToastProvider from '@/components/toast/_store/ToastProvider'

import localFont from 'next/font/local'

const pretendardFont = localFont({
  src: [
    {
      path: '../../public/font/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/font/Pretendard-SemiBold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})

function App({ Component, pageProps }: AppPropsWithLayout) {
  const _getLayout = Component.getLayout || getLayout

  return (
    <>
      <Global styles={resetStyle} />
      <main className={pretendardFont.className}>
        <ToastProvider>
          {_getLayout(<Component {...pageProps} />)}
        </ToastProvider>
      </main>
    </>
  )
}

export default App

const getLayout: GetLayout = (page) => (
  <Layout>
    <MetaHead
      title={page.props?.title}
      description={page.props?.description}
      image={page.props?.image}
    />
    {page}
  </Layout>
)
