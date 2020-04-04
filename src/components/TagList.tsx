import React from 'react'
import { FiHash } from 'react-icons/fi'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import Link from 'components/Link'

interface TagListProps {
  tags: string[]
}

const TagList: React.FC<TagListProps> = ({ tags }) => (
  <ul className="-mx-2">
    {tags.map(tag => (
      <li key={tag} className="inline">
        <NextLink {...Routes.tag(tag)} passHref>
          <Link title={tag} className="text-xs whitespace-no-wrap">
            <FiHash />
            {tag}
          </Link>
        </NextLink>
      </li>
    ))}
  </ul>
)

export default TagList
