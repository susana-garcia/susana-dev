import React from 'react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

const Header = () => (
  <header className="flex items-center justify-center p-4 mb-4">
    <div className="mr-auto">
      <Link href="/">
        <a className="font-black">
          B<span className="font-light">log</span>
        </a>
      </Link>
    </div>
    <div>
      <DarkModeToggle />
    </div>
  </header>
)

export default Header
