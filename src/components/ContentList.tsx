import React from 'react'
import Link from 'components/Link'
import ContentListItem from 'components/ContentListItem'
import { Content } from 'utils/contents'

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
      <ContentListItem key={content.slug} content={content} />
    ))}
  </>
)

export default ContentList
