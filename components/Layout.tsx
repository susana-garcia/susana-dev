import React from 'react'
import Head from 'next/head'
import Header from './Header'
import clsx from 'clsx'

interface LayoutProps {
  title?: string
  centered?: boolean
}

const Layout: React.FC<LayoutProps> = ({ title, centered = false, children }) => (
  <>
    <Head>
      <title>{`Blog ${title ? ` | ${title}` : ''}`}</title>
    </Head>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className={clsx('flex-grow', {
          'flex flex-col items-center justify-center': centered,
        })}
      >
        {children}
      </main>
      <footer className="text-xs text-center text-gray-600 py-4  mt-10">
        Made with ♥ by <a href="https://www.twitter.com/lailo_ch">@lailo_ch</a>
      </footer>
    </div>
  </>
)

export default Layout
