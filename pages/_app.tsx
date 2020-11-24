import React from 'react'
import 'bulma-pro/css/bulma.css'
import { AnimateSharedLayout } from 'framer-motion'
import '@fortawesome/fontawesome-free/css/all.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
