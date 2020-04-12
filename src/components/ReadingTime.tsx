import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import clsx from 'clsx'

interface ReadingTimeProps {
  readingTime: string
  className?: string
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ readingTime, className }) => (
  <span className={clsx(className)}>
    <AiOutlineClockCircle className="mr-1" />
    {readingTime}
  </span>
)

export default ReadingTime
