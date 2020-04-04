import React from 'react'
import Link from 'components/Link'
import Container from 'components/layout/Container'
import ContentListItem from 'components/ContentListItem'
import Newsletter from 'components/Newsletter'
import { Content } from 'utils/contents'
import clsx from 'clsx'

interface ContentListProps {
  className?: string
  contents: Content[]
}

const ContentList: React.FC<ContentListProps> = ({ contents, className }) => (
  <Container size="large" className={clsx('grid gap-4 grid-cols-2 md:grid-cols-4', className)}>
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
      <ContentListItem key={content.slug} content={content} className={clsx('col-span-2')} />
    ))}
    <Newsletter className="col-span-2" />
  </Container>
)

export default ContentList
