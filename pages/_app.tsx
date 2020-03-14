import React from 'react'
import { AppProps } from 'next/app'
import '../styles/tailwind.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
