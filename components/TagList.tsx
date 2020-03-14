import React from 'react'
import Link from 'next/link'

interface TagListProps {
  tags: string[]
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <ul className="flex">
      {tags.map(tag => (
        <li key={tag} className="mr-1">
          <span className="text-xs text-gray-600 px-2 border border-gray-400 rounded-full">
            <Link
              href={{ pathname: '/tags', query: { tag } }}
              as={`/tags/${tag}`}
            >
              <a>{tag}</a>
            </Link>
          </span>
        </li>
      ))}
    </ul>
  )
}
export default TagList
