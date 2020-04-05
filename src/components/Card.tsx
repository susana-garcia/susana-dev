import React from 'react'
import clsx from 'clsx'

interface CardProps {
  className?: string
  noPadding?: boolean
}

const Card: React.FC<CardProps> = ({ className, noPadding = false, children }) => (
  <div
    className={clsx(
      'rounded',
      'bg-white dark:bg-gray-900',
      'border border-gray-100 dark:border-gray-900',
      'shadow',
      'overflow-hidden',
      {
        'p-4 md:p-6 ': !noPadding,
      },
      className
    )}
  >
    {children}
  </div>
)

export default Card
