import React from 'react'
import format from 'date-fns/format'
import { FiCalendar, FiEyeOff } from 'react-icons/fi'
import clsx from 'clsx'

interface PublishedAtProps {
  date: string
  className?: string
}

const PublishedAt: React.FC<PublishedAtProps> = ({ date, className }) => {
  const isPublished = !!date

  return (
    <time dateTime={date} itemProp="datePublished" className={clsx(className)}>
      {isPublished ? <FiCalendar className="mr-1" /> : <FiEyeOff className="mr-1" />}
      {isPublished ? format(new Date(date), 'MMM d, yyyy') : 'Not Published'}
    </time>
  )
}

export default PublishedAt
