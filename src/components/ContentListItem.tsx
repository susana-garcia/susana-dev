import React from 'react'
import MetaInfos from 'components/MetaInfos'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import { Content, ContentType } from 'utils/contents'

interface ContentListItemProps {
  content: Content
}

const ContentListItem: React.FC<ContentListItemProps> = ({ content }) => (
  <article
    key={content.slug}
    className="mb-4 p-4 -mx-4 rounded hover:bg-white dark-hover:bg-gray-900 hover:shadow-md"
  >
    <header>
      <NextLink {...linkDataForType(content.type, content.slug)}>
        <a title={content.title} className="text-3xl font-black">
          {content.title}
        </a>
      </NextLink>
    </header>
    <p className="text-lg font-light text-gray-700 dark:text-gray-300 mb-2">
      {content.description}
    </p>
    <MetaInfos
      contentType={content.type}
      publishedAt={content.publishedAt}
      tags={content.tags}
      readingTime={content.readingTime}
    />
  </article>
)

function linkDataForType(
  type: ContentType,
  slug: string
): {
  href: string
  as: string
} {
  switch (type) {
    case 'article':
      return Routes.article(slug)
    case 'tip':
      return Routes.tip(slug)
    case 'project':
      return Routes.project(slug)
    default:
      return Routes.home()
  }
}

export default ContentListItem
