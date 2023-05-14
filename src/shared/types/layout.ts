import { NextPage } from 'next'
import { AppInitialProps, AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

import { CombineType } from './extendable'
import { HeadMetaProps } from '@/components/HeadMeta'

type PageProps = CombineType<AppInitialProps['pageProps'], HeadMetaProps>

export type GetLayout<T = PageProps> = (page: ReactElement<T>) => ReactNode

export type NextPageWithLayout<P = PageProps, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout<P>
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
