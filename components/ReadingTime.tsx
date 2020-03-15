import React from 'react'
import { ReadingTime as ReadingTimeType } from '../utils/articles'

interface ReadingTimeProps {
  readingTime: ReadingTimeType
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ readingTime }) => (
  <span className="text-xs text-gray-700 dark:text-gray-500">{readingTime.text}</span>
)

export default ReadingTime
