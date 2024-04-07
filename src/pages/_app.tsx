import { Global } from '@emotion/react'

import Layout from '@/components/layout/Layout'
import MetaHead from '@/components/seo/MetaHead'

import resetStyle from '@/styles/resetStyle'

import { AppPropsWithLayout, GetLayout } from '@/shared/types/layout'
import ToastProvider from '@/components/toast/_store/ToastProvider'

function App({ Component, pageProps }: AppPropsWithLayout) {
  const _getLayout = Component.getLayout || getLayout

  return (
    <>
      <Global styles={resetStyle} />
      <ToastProvider>{_getLayout(<Component {...pageProps} />)}</ToastProvider>
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
