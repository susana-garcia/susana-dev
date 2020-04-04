import React from 'react'
import clsx from 'clsx'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

interface LayoutProps {
  centered?: boolean
  withoutNewsletter?: boolean
  subheader?: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({
  centered = false,
  withoutNewsletter = false,
  subheader,
  children,
}) => (
  <>
    <div className="min-h-screen flex flex-col">
      <Header>{subheader}</Header>
      <main
        className={clsx('flex-grow py-8', {
          'flex flex-col items-center justify-center': centered,
        })}
      >
        {children}
      </main>
      <Footer withoutNewsletter={withoutNewsletter} />
    </div>
  </>
)

export default Layout
