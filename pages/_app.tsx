import React from 'react'
import { AppProps } from 'next/app'
import Link from 'next/link'

import '../styles/tailwind.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div>
    <Link href="/">
      <a>
        <h1 className="text-3xl text-center font-black my-10 hover:text-gray-800">
          My Blog
        </h1>
      </a>
    </Link>
    <main className="container max-w-3xl">
      <Component {...pageProps} />
    </main>
  </div>
)

export default App
