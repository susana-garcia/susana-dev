import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

interface LayoutProps {
  title?: string
  centered?: boolean
  subheader?: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ title, centered = false, subheader, children }) => (
  <>
    <Head>
      <title>{`Blog ${title ? ` | ${title}` : ''}`}</title>
    </Head>
    <div className="min-h-screen flex flex-col">
      <Header>{subheader}</Header>
      <main
        className={clsx('flex-grow py-8', {
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
