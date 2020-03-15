import React from 'react'
import Link from 'next/link'
import format from 'date-fns/format'
import { Article } from '../utils/articles'
import TagList from './TagList'
import ReadingTime from './ReadingTime'
import PublishedAt from './PublishedAt'

interface ArticleListProps {
  articles: Article[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <>
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
            <div className="flex justify-between">
              <PublishedAt date={article.date} />
              <ReadingTime readingTime={article.readingTime} />
            </div>
            <h2 className="text-xl font-black my-1">{article.title}</h2>
            <p className="font-light text-gray-700 dark:text-gray-300">{article.excerpt}</p>
          </a>
        </Link>
        <div className="block px-6 py-2 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <TagList tags={article.tags} />
        </div>
      </article>
    ))}
  </>
)

export default ArticleList
