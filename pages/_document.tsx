import { Html, Head, Main, NextScript } from 'next/document'

/**
 * @note update the <html> and <body> tags ,only rendered on the server
 * 폰트 임포트
 * charset, 웹 접근성 관련 태그 설정
 */

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
