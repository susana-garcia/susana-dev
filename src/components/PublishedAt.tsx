import React from 'react'
import format from 'date-fns/format'
import { FiCalendar } from 'react-icons/fi'
import clsx from 'clsx'

interface PublishedAtProps {
  date: string
  className?: string
}

const PublishedAt: React.FC<PublishedAtProps> = ({ date, className }) => (
  <time dateTime={date} itemProp="datePublished" className={clsx(className)}>
    <FiCalendar className="mr-1" />
    {format(new Date(date), 'MMM d, yyyy')}
  </time>
)

export default PublishedAt
