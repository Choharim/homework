import type { AppProps } from 'next/app'
import { NextPage } from 'next/types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from 'styles/theme'

import { Layout } from 'components'

export type NextPageWithLayout<T = Record<string, unknown>> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const ComstomedComponent = Component?.getLayout ? (
    Component.getLayout(<Component {...pageProps} />)
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {ComstomedComponent}
    </ThemeProvider>
  )
}

export default App
