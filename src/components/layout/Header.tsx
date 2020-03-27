import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Container from 'components/layout/Container'

const DarkModeToggle = dynamic(() => import('components/DarkModeToggle'), {
  ssr: false,
})

const Header: React.FC = ({ children }) => (
  <header className="bg-primary">
    <Container size="fluid" grid className="h-12 bg-primary grid-cols-2 py-0 items-center">
      <div>
        <Link href="/">
          <a
            title="Back home"
            className="font-black text-white hover:text-white hover:no-underline"
          >
            B<span className="font-light">log</span>
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
