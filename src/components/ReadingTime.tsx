import React from 'react'
import { FiCoffee } from 'react-icons/fi'
import clsx from 'clsx'
import { ReadingTime as ReadingTimeType } from 'utils/articles'

interface ReadingTimeProps {
  readingTime: ReadingTimeType
  className?: string
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ readingTime, className }) => (
  <span className={clsx('text-xs', className)}>
    <FiCoffee className="mr-1" />
    {readingTime.text}
  </span>
)

export default ReadingTime
