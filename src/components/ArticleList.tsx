import React from 'react'
import Link from 'next/link'
import { Article } from 'utils/articles'
import ArticleMetaInfos from 'components/ArticleMetaInfos'

interface ArticleListProps {
  articles: Article[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <>
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
        <p className="text-lg font-light text-gray-700 dark:text-gray-300">{article.excerpt}</p>
        <ArticleMetaInfos article={article} />
      </article>
    ))}
  </>
)

export default ArticleList
