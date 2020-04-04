import React from 'react'
import { Article } from 'utils/contents/articles'
import ArticleMetaInfos from 'components/ArticleMetaInfos'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import Link from 'components/Link'

interface ArticleListProps {
  articles: Article[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <>
    {articles.length === 0 && (
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
    {articles.map(article => (
      <article
        key={article.slug}
        className="mb-4 p-4 -mx-4 rounded hover:bg-white dark-hover:bg-gray-900 hover:shadow-md"
      >
        <header>
          <NextLink {...Routes.article(article.slug)}>
            <a title={article.title} className="text-3xl font-black">
              {article.title}
            </a>
          </NextLink>
        </header>
        <p className="text-lg font-light text-gray-700 dark:text-gray-300 mb-2">
          {article.description}
        </p>
        <ArticleMetaInfos article={article} />
      </article>
    ))}
  </>
)

export default ArticleList
