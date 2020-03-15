import React from 'react'
import Link from 'next/link'
import useDarkMode from 'use-dark-mode'

const Header = () => {
  const darkMode = useDarkMode(false, {})

  return (
    <header className="flex items-center justify-center p-4 mb-4">
      <div className="mr-auto">
        <Link href="/">
          <a className="font-black">
            B<span className="font-light">log</span>
          </a>
        </Link>
      </div>
      <div>
        <button
          className="hover:bg-gray-300  dark-hover:bg-gray-700 rounded-full w-8 h-8"
          onClick={darkMode.toggle}
        >
          {darkMode.value ? '☀' : '☾'}
        </button>
      </div>
    </header>
  )
}
export default Header
