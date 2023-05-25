import { Global, ThemeProvider } from '@emotion/react'

import Layout from '@/components/layout/Layout'
import MetaHead from '@/components/layout/MetaHead'

import resetStyle from '@/styles/resetStyle'
import { THEME } from '@/styles/constants/theme'
import { AppPropsWithLayout, GetLayout } from '@/shared/types/layout'

function App({ Component, pageProps }: AppPropsWithLayout) {
  const _getLayout = Component.getLayout || getLayout

  return (
    <ThemeProvider theme={THEME}>
      <Global styles={resetStyle} />
      {_getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
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
