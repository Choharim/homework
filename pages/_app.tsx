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
  const layout = Component?.getLayout
    ? Component.getLayout
    : (page: React.ReactElement) => <Layout>{page}</Layout>

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {layout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default App
