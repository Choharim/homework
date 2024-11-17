import { BLOG, EN_NAME } from '@/feature/app/constants/owner'
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
      path: '../../public/font/Pretendard-SemiBold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${BLOG.shortName}의 개발 블로그`,
    default: `${BLOG.shortName}의 개발 블로그`,
  },
  applicationName: `${BLOG.shortName}의 개발 블로그`,
  authors: [{ name: `${EN_NAME.first} ${EN_NAME.last}`, url: BLOG.domain }],
  openGraph: {
    type: 'website',
    siteName: `${BLOG.shortName}의 개발 블로그`,
    title: {
      template: `%s | ${BLOG.shortName}의 개발 블로그`,
      default: `${BLOG.shortName}의 개발 블로그`,
    },
  },
  metadataBase: new URL(BLOG.domain),
  robots: 'index, follow',
}

export default function RootLayout({
  // 레이아웃은 children prop을 받아야 합니다.
  // 이는 중첩된 레이아웃 또는 페이지로 채워집니다.
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
      <body className={pretendardFont.className}>{children}</body>
    </html>
  )
}
