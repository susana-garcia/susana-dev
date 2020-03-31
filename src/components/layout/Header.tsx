import React from 'react'
import NextLink from 'next/link'
import Link from 'components/Link'
import dynamic from 'next/dynamic'
import Container from 'components/layout/Container'
import clsx from 'clsx'
import { Routes } from 'utils/routes'

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
        <NextLink {...Routes.home()}>
          <Link title="Back home" className="font-black text-black">
            Lailo
          </Link>
        </NextLink>
      </div>
      <div className="text-right">
        <DarkModeToggle />
      </div>
    </Container>
    {children && <Container>{children}</Container>}
  </header>
)

export default Header
