import { Html, Head, Main, NextScript } from 'next/document'

export const TOAST_PORTAL_ID = 'toast-portal'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <body>
        <Main />
        <div id={TOAST_PORTAL_ID} />
        <NextScript />
      </body>
    </Html>
  )
}
