import React from 'react'
import format from 'date-fns/format'
import { FiEdit2 } from 'react-icons/fi'
import clsx from 'clsx'

interface UpdatedAtProps {
  updatedAt?: string
  className?: string
}

const UpdatedAt: React.FC<UpdatedAtProps> = ({ updatedAt, className }) => {
  if (!updatedAt) return null

  return (
    <span className={clsx('text-xs text-gray-500 dark:text-gray-600', className)}>
      <FiEdit2 className="mr-1" />
      Updated at {format(new Date(updatedAt), 'MMM d, yyyy')}
    </span>
  )
}

export default UpdatedAt
