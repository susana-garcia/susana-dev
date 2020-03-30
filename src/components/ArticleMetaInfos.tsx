import React from 'react'
import { Article } from 'utils/articles'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'

interface ArticleMetaInfosProps {
  article: Article
}

const ArticleMetaInfos: React.FC<ArticleMetaInfosProps> = ({ article }) => (
  <div className="text-gray-800 dark:text-gray-200 flex flex-col sm:flex-row sm:justify-between">
    <div>
      <PublishedAt date={article.publishedAt} className="mr-3" />
      <ReadingTime readingTime={article.readingTime} />
    </div>
    <div className="sm:text-right">
      <TagList tags={article.tags} />
    </div>
  </div>
)

export default ArticleMetaInfos
