import React from 'react'
import { Article } from 'utils/articles'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'

interface ArticleMetaInfosProps {
  article: Article
}

const ArticleMetaInfos: React.FC<ArticleMetaInfosProps> = ({ article }) => (
  <div className="text-gray-800 dark:text-gray-200 grid grid-cols-1 md:grid-cols-2 items-center">
    <div>
      <PublishedAt date={article.date} className="mr-3" />
      <ReadingTime readingTime={article.readingTime} />
    </div>
    <div className="md:text-right">
      <TagList tags={article.tags} />
    </div>
  </div>
)

export default ArticleMetaInfos
