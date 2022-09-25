import type { AppProps } from 'next/app'
import { NextPage } from 'next/types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from 'styles/theme'
import { Layout } from 'components'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function CustomedApp({ Component, pageProps }: AppPropsWithLayout) {
  const CustomedComponent = Component?.getLayout ? (
    Component.getLayout(<Component {...pageProps} />)
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {CustomedComponent}
    </ThemeProvider>
  )
}

export default CustomedApp
