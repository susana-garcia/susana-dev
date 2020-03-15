import React from 'react'
import Link from 'next/link'
import format from 'date-fns/format'
import { Article } from '../utils/articles'
import TagList from './TagList'

interface ArticleListProps {
  articles: Article[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
    {articles.map(article => (
      <article
        key={article.slug}
        className="flex flex-col bg-white dark:bg-gray-800 border dark:border-gray-800 rounded shadow hover:shadow-lg overflow-auto"
      >
        <Link
          href={{ pathname: '/articles', query: { slug: article.slug } }}
          as={`/articles/${article.slug}`}
        >
          <a className="block p-6 flex-grow">
            <time
              dateTime={article.date}
              itemProp="datePublished"
              className="text-xs text-gray-700 dark:text-gray-500"
            >
              {format(new Date(article.date), 'MMM d, yyyy')}
            </time>

            <h2 className="text-xl font-black my-1">{article.title}</h2>
            <p className="font-light text-gray-700 dark:text-gray-300">{article.excerpt}</p>
          </a>
        </Link>
        <div className="block px-6 py-2 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <TagList tags={article.tags} />
        </div>
      </article>
    ))}
  </div>
)

export default ArticleList
