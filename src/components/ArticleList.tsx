import React from 'react'
import Link from 'next/link'
import { Article } from 'utils/articles'
import ArticleMetaInfos from 'components/ArticleMetaInfos'
import { FiRss } from 'react-icons/fi'

interface ArticleListProps {
  articles: Article[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <>
    {articles.length === 0 && (
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        There aren't any posts yet. <br />
        Subscribe to my{' '}
        <a className="text-sm" title="RSS" href="/rss.xml">
          {' '}
          RSS feed
        </a>{' '}
        or follow me on{' '}
        <a
          className="text-sm"
          href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
          title="Twitter account"
        >
          Twitter
        </a>{' '}
        to not miss out.
      </p>
    )}
    {articles.map(article => (
      <article
        key={article.slug}
        className="mb-4 p-4 rounded hover:bg-white dark-hover:bg-gray-900 hover:shadow-md"
      >
        <header>
          <Link
            href={{ pathname: '/articles', query: { slug: article.slug } }}
            as={`/articles/${article.slug}`}
          >
            <a title={article.title} className="text-3xl font-black">
              {article.title}
            </a>
          </Link>
        </header>
        <p className="text-lg font-light text-gray-700 dark:text-gray-300 mb-2">
          {article.excerpt}
        </p>
        <ArticleMetaInfos article={article} />
      </article>
    ))}
  </>
)

export default ArticleList
