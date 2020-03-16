import React from 'react'
import Link from 'next/link'
import { Article } from 'utils/articles'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'

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
            <a title={article.title} className="text-3xl font-black">
              {article.title}
            </a>
          </Link>
        </header>
        <p className="text-lg font-light text-gray-700 dark:text-gray-300">{article.excerpt}</p>
        <div className="text-gray-600 dark:text-gray-500">
          <PublishedAt date={article.date} className="mr-3" />
          <ReadingTime readingTime={article.readingTime} className="mr-2" />
          <TagList tags={article.tags} />
        </div>
      </article>
    ))}
  </>
)

export default ArticleList
