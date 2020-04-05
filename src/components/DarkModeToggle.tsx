import React from 'react'
import clsx from 'clsx'
import useDarkMode from 'use-dark-mode'
import { FiMoon, FiSun } from 'react-icons/fi'

interface DarkModeToggleProps {
  className?: string
  withLabel?: boolean
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className, withLabel = false }) => {
  const darkMode = useDarkMode(false, { element: document.documentElement })

  return (
    <button
      className={clsx(
        'text-primary',
        'rounded-full px-2 py-1',
        'hover:bg-primary hover:text-white',
        'cursor-pointer hover:no-underline',
        'transition ease-in-out duration-200',
        className
      )}
      onClick={darkMode.toggle}
      role="switch"
      aria-checked={darkMode.value ? 'true' : 'false'}
    >
      {darkMode.value ? <FiSun /> : <FiMoon />}
      {withLabel && <span> {darkMode.value ? 'Light Theme' : 'Dark Theme'}</span>}
    </button>
  )
}

export default DarkModeToggle
