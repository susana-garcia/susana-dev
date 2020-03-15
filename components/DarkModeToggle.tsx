import React from 'react'
import useDarkMode from 'use-dark-mode'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, {})

  return (
    <button
      className="hover:bg-gray-300  dark-hover:bg-gray-700 rounded-full w-8 h-8"
      onClick={darkMode.toggle}
    >
      {darkMode.value ? '☀' : '☾'}
    </button>
  )
}

export default DarkModeToggle
