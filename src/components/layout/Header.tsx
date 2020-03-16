import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Container from 'components/layout/Container'

const DarkModeToggle = dynamic(() => import('components/DarkModeToggle'), {
  ssr: false,
})

const Header = () => (
  <header>
    <Container size="fluid" grid className="grid-cols-2">
      <div>
        <Link href="/">
          <a title="Back home" className="font-black text-black dark:text-white hover:no-underline">
            B<span className="font-light">log</span>
          </a>
        </Link>
      </div>
      <div className="text-right">
        <DarkModeToggle />
      </div>
    </Container>
  </header>
)

export default Header
