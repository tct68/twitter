import { Html, Head, Main, NextScript } from 'next/document'
import { roboto_mono } from '../fonts'

export default function Document() {
  return (
    <Html lang='en'>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
      <title>Trang Chủ</title>
      <Head />
      <body className={roboto_mono.className}>
        <Main />
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  )
}
