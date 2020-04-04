import React from 'react'
import MetaInfos from 'components/MetaInfos'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import Link from 'components/Link'
import { Content, ContentType } from 'utils/contents'

interface ContentListProps {
  contents: Content[]
}

const ContentList: React.FC<ContentListProps> = ({ contents }) => (
  <>
    {contents.length === 0 && (
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        There aren't any posts yet. <br />
        Subscribe to my
        <Link className="text-sm" title="RSS" href="/rss.xml">
          RSS feed
        </Link>
        or follow me on
        <Link
          className="text-sm"
          href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
          title="Twitter account"
        >
          Twitter
        </Link>
        to not miss out.
      </p>
    )}
    {contents.map(content => (
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
    ))}
  </>
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

export default ContentList
