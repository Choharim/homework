import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { NextPage } from 'next/types'
import { GlobalStyles } from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

/**
 * @note 페이지에 적용할 공통 레이아웃
 */
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
