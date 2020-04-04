import React from 'react'
import CategoryLabel from 'components/CategoryLabel'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import { Content, ContentType } from 'utils/contents'
import clsx from 'clsx'

interface ContentListItemProps {
  className?: string
  content: Content
}

const ContentListItem: React.FC<ContentListItemProps> = ({ content, className }) => (
  <article
    key={content.slug}
    className={clsx(
      'flex flex-col',
      'p-4 rounded bg-white dark:bg-gray-900 shadow hover:shadow-xl',
      'transform hover:-translate-y-1',
      'transition ease-in-out duration-75',
      className
    )}
  >
    <div className="flex justify-between mb-4 text-xs">
      <PublishedAt date={content.publishedAt} />
      <div>
        {content.type === 'article' && (
          <ReadingTime readingTime={content.readingTime.text} className="mr-4" />
        )}
        <CategoryLabel type={content.type} withLabel />
      </div>
    </div>
    <header className="mb-2">
      <NextLink {...linkDataForType(content.type, content.slug)}>
        <a title={content.title} className="text-3xl font-black leading-tight">
          {content.title}
        </a>
      </NextLink>
    </header>
    <p className="flex-grow text-lg font-light text-gray-700 dark:text-gray-300 mb-2">
      {content.description}
    </p>
    <TagList tags={content.tags} short />
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
