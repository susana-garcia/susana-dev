import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'

interface LayoutProps {
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`Lailog ${title ? ` | ${title}` : ''}`}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container max-w-3xl flex-grow">{children}</main>
        <footer className="text-xs text-center text-gray-600 py-4 px-3 mt-10">
          Made with ♥ by{' '}
          <a href="https://www.twitter.com/lailo_ch">@lailo_ch</a>
        </footer>
      </div>
    </>
  )
}
export default Layout
