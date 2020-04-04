import React from 'react'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'
import CategoryLabel from 'components/CategoryLabel'
import { ReadingTime as ReadingTimeType } from 'utils/contents/articles'
import { ContentType } from 'utils/contents'
import clsx from 'clsx'

interface MetaInfosProps {
  contentType: ContentType
  publishedAt: string
  tags: string[]
  readingTime?: ReadingTimeType
  alignCenter?: boolean
}

const MetaInfos: React.FC<MetaInfosProps> = ({
  contentType,
  publishedAt,
  tags,
  readingTime,
  alignCenter = false,
}) => (
  <div
    className={clsx('text-gray-800 dark:text-gray-200', 'flex flex-col', {
      'sm:flex-row sm:justify-between': !alignCenter,
    })}
  >
    <div>
      <PublishedAt date={publishedAt} className="mr-3" />
      {contentType === 'article' && readingTime && <ReadingTime readingTime={readingTime} />}
      {contentType === 'tip' && <CategoryLabel type="tip">Tip</CategoryLabel>}
      {contentType === 'project' && <CategoryLabel type="project">Project</CategoryLabel>}
    </div>
    <div className={clsx({ 'sm:text-right': !alignCenter })}>
      <TagList tags={tags} />
    </div>
  </div>
)

export default MetaInfos
