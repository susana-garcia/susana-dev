import React from 'react'
import CategoryLabel from 'components/CategoryLabel'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'
import Card from 'components/Card'
import linkForContentType from 'utils/linkForContentType'
import NextLink from 'next/link'
import { Content } from 'utils/contents'
import clsx from 'clsx'

interface ContentListItemProps {
  className?: string
  content: Content
}

const ContentListItem: React.FC<ContentListItemProps> = ({ content, className }) => {
  return (
    <article className={clsx(className)}>
      <Card
        className={clsx(
          'flex flex-col',
          'hover:shadow-xl',
          'transform hover:-translate-y-1',
          'transition ease-in-out duration-75',
          'h-full'
        )}
      >
        <div
          className={clsx(
            '-m-4 md:-m-6 px-4 md:px-6 pb-8 flex items-center justify-between text-xs'
          )}
        >
          <PublishedAt date={content.publishedAt} />
          <div>
            <ReadingTime readingTime={content.readingTime.text} className="mr-4" />
            <CategoryLabel
              type={content.type}
              withLabel
              className={clsx(
                'inline-block px-4 py-2 rounded-bl-lg rounded-br-md',
                'bg-gray-100 dark:bg-gray-800',
                'text-gray-600',
                'shadow-xs'
              )}
            />
          </div>
        </div>
        <header className="mb-2">
          <NextLink {...linkForContentType(content.type, content.slug)}>
            <a title={content.title} className="text-3xl font-black leading-tight">
              {content.title}
            </a>
          </NextLink>
        </header>
        <p className="flex-grow text-lg font-light text-gray-700 dark:text-gray-300 mb-2">
          {content.description}
        </p>
        <TagList tags={content.tags} short className="-mb-2" />
      </Card>
    </article>
  )
}

export default ContentListItem
