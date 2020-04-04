import React from 'react'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'
import TipLabel from 'components/TipLabel'
import { ReadingTime as ReadingTimeType } from 'utils/contents/articles'
import { ContentType } from 'utils/contents'

interface MetaInfosProps {
  contentType: ContentType
  publishedAt: string
  tags: string[]
  readingTime?: ReadingTimeType
}

const MetaInfos: React.FC<MetaInfosProps> = ({ contentType, publishedAt, tags, readingTime }) => (
  <div className="text-gray-800 dark:text-gray-200 flex flex-col sm:flex-row sm:justify-between">
    <div>
      <PublishedAt date={publishedAt} className="mr-3" />
      {contentType === 'article' && readingTime && <ReadingTime readingTime={readingTime} />}
      {contentType === 'tip' && <TipLabel />}
    </div>
    <div className="sm:text-right">
      <TagList tags={tags} />
    </div>
  </div>
)

export default MetaInfos
