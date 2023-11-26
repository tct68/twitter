import MainLayout from '@/layouts/mainLayout'

import '@/styles/style.css'
import '@/styles/globals.css'
import '@/pages/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
