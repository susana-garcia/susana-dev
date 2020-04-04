import React from 'react'
import { IoMdPaper } from 'react-icons/io'
import clsx from 'clsx'
import { ReadingTime as ReadingTimeType } from 'utils/contents/articles'

interface ReadingTimeProps {
  readingTime: ReadingTimeType
  className?: string
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ readingTime, className }) => (
  <span className={clsx('text-xs', className)}>
    <IoMdPaper className="mr-1" />
    {readingTime.text}
  </span>
)

export default ReadingTime
