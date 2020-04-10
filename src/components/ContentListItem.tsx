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
        noPadding
        className={clsx(
          'hover:shadow-xl',
          'transform hover:-translate-y-1',
          'transition ease-in-out duration-75',
          'h-full'
        )}
      >
        {content.image && (
          <NextLink {...linkForContentType(content.type, content.slug)}>
            <a title={content.title}>
              <img
                src={content.image}
                alt={content.title}
                className={clsx(
                  'h-56 md:h-82 lg:h-64 w-full -mt-1',
                  'object-cover object-center',
                  'border-b border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-700'
                )}
              />
            </a>
          </NextLink>
        )}
        <div
          className={clsx(
            'relative p-4 md:p-6 flex flex flex-col justify-between',
            'md:h-64 lg:h-56'
          )}
        >
          <div
            className={clsx(
              '-m-4 md:-m-6 px-4 md:px-6 pb-8 flex items-center justify-between text-xs'
            )}
          >
            <PublishedAt date={content.publishedAt} />
            <div>
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
          <div className="mb-2">
            <header className="mb-2">
              <NextLink {...linkForContentType(content.type, content.slug)}>
                <a title={content.title} className="text-3xl font-black leading-tight">
                  {content.title}
                </a>
              </NextLink>
            </header>
            <p className="text-lg font-light text-gray-700 dark:text-gray-300 max-h-20 overflow-hidden ">
              {content.description}
            </p>
          </div>
          <div className="-mb-2 flex items-center justify-between">
            <TagList tags={content.tags} short />
            <ReadingTime readingTime={content.readingTime.text} className="text-xs text-gray-600" />
          </div>
        </div>
      </Card>
    </article>
  )
}

export default ContentListItem
