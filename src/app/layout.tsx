import { TOAST_PORTAL_ID } from '@/components/Toast/_constants'
import ToastProvider from '@/components/Toast/_store/ToastProvider'
import AppFeature from '@/feature/application'
import SEOFeature from '@/feature/seo'

import type { Metadata } from 'next'

import localFont from 'next/font/local'
import 'src/styles/globalStyle.css'

const pretendardFont = localFont({
  src: [
    {
      path: '../../public/font/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/font/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/font/Pretendard-SemiBold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${SEOFeature.METADATA.title}`,
    default: `${SEOFeature.METADATA.title}`,
  },
  applicationName: SEOFeature.METADATA.title,
  authors: [{ name: AppFeature.AUTHOR_NAME.en, url: AppFeature.URL.domain }],
  openGraph: {
    title: {
      template: `%s | ${SEOFeature.METADATA.title}`,
      default: SEOFeature.METADATA.title,
    },
    locale: 'ko_KR',
    type: 'website',
    siteName: SEOFeature.METADATA.title,
  },
  metadataBase: new URL(AppFeature.URL.domain),
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
      />
      <ToastProvider>
        <body className={pretendardFont.className}>{children}</body>
      </ToastProvider>
      <div id={TOAST_PORTAL_ID} />
    </html>
  )
}
