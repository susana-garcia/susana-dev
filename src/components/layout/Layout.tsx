import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

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
      <Footer />
    </div>
  </>
)

export default Layout
