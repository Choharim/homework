import { Html, Head, Main, NextScript } from 'next/document'

export const TOAST_PORTAL_ID = 'toast-portal'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
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
