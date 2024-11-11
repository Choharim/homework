import Layout from '@/components/layout/Layout'
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
  title: 'Home',
  description: 'Welcome to Next.js',
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
      <body className={pretendardFont.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
