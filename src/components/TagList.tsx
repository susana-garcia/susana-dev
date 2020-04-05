import React from 'react'
import { FiHash } from 'react-icons/fi'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import Link from 'components/Link'
import clsx from 'clsx'

interface TagListProps {
  tags: string[]
  short?: boolean
  className?: string
}

const TagList: React.FC<TagListProps> = ({ tags, className, short = false }) => {
  let preparedTags = tags

  if (short) {
    preparedTags = preparedTags.slice(0, 3)
  }

  return (
    <ul className={clsx('-mx-2', className)}>
      {preparedTags.map(tag => (
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
}

export default TagList
