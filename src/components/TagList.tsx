import React from 'react'
import Link from 'next/link'
import { FiHash } from 'react-icons/fi'
import clsx from 'clsx'

interface TagListProps {
  tags: string[]
  light?: boolean
}

const TagList: React.FC<TagListProps> = ({ tags, light = false }) => (
  <ul className="inline-flex">
    {tags.map(tag => (
      <li key={tag}>
        <Link href={{ pathname: '/tags', query: { tag } }} as={`/tags/${tag}`}>
          <a
            className={clsx('text-xs mr-1', { 'text-white hover:text-gray-200': light })}
            title={tag}
          >
            <FiHash />
            {tag}
          </a>
        </Link>
      </li>
    ))}
  </ul>
)

export default TagList
