import React from 'react'
import format from 'date-fns/format'

interface PublishedAtProps {
  date: string
}

const PublishedAt: React.FC<PublishedAtProps> = ({ date }) => (
  <time
    dateTime={date}
    itemProp="datePublished"
    className="text-xs text-gray-700 dark:text-gray-500"
  >
    {format(new Date(date), 'MMM d, yyyy')}
  </time>
)

export default PublishedAt
