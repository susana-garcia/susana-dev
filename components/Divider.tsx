import React from 'react'
import clsx from 'clsx'

interface DividerProps {
  className?: string
}

const Divider: React.FC<DividerProps> = ({ className }) => (
  <hr className={clsx('my-10 w-64 border-gray-400 dark:border-gray-700', className)} />
)

export default Divider
