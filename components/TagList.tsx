import React from 'react'
import Link from 'next/link'
import { FiHash } from 'react-icons/fi'

interface TagListProps {
  tags: string[]
}

const TagList: React.FC<TagListProps> = ({ tags }) => (
  <ul className="inline-flex">
    {tags.map(tag => (
      <li key={tag}>
        <Link href={{ pathname: '/tags', query: { tag } }} as={`/tags/${tag}`}>
          <a className="text-xs px-1 hover:bg-primary hover:text-white rounded-full">
            <FiHash />
            {tag}
          </a>
        </Link>
      </li>
    ))}
  </ul>
)

export default TagList
