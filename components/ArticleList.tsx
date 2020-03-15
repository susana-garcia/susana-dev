import React from 'react'
import Link from 'next/link'
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
      <article key={article.slug} className="mb-8">
        <header>
          <Link
            href={{ pathname: '/articles', query: { slug: article.slug } }}
            as={`/articles/${article.slug}`}
          >
            <a className="text-3xl font-black text-primary hover:text-primary-dark hover:underline">
              {article.title}
            </a>
          </Link>
        </header>
        <p className="text-lg font-light text-gray-700 dark:text-gray-300">{article.excerpt}</p>
        <div>
          <TagList tags={article.tags} />
          {'  '}
          <PublishedAt date={article.date} />
          {' · '}
          <ReadingTime readingTime={article.readingTime} />
        </div>
      </article>
    ))}
  </>
)

export default ArticleList
