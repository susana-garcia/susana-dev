import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Container from 'components/layout/Container'
import clsx from 'clsx'

const DarkModeToggle = dynamic(() => import('components/DarkModeToggle'), {
  ssr: false,
})

const Header: React.FC = ({ children }) => (
  <header
    className={clsx({
      'bg-white border-b border-gray-300': children,
      'dark:bg-gray-900 dark:border-gray-800': children,
    })}
  >
    <Container size="fluid" grid className="h-12 grid-cols-2 py-0 items-center">
      <div>
        <Link href="/">
          <a
            title="Back home"
            className="font-black text-black dark:text-white hover:text-primary hover:no-underline flex"
          >
            <div>Lai</div>
            <div className="text-primary font-thin">B</div>
            <div className="border-b border-primary">lo</div>
            <div className="text-primary font-thin">g</div>
          </a>
        </Link>
      </div>
      <div className="text-right">
        <DarkModeToggle />
      </div>
    </Container>
    {children && <Container size="small">{children}</Container>}
  </header>
)

export default Header
