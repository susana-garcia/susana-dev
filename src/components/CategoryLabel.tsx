import React from 'react'
import clsx from 'clsx'
import { ContentType } from 'utils/contents'
import { GoLightBulb } from 'react-icons/go'
import { IoMdPaper } from 'react-icons/io'
import { AiOutlineCode } from 'react-icons/ai'

interface CategoryLabelProps {
  type: ContentType
  className?: string
  withLabel?: boolean
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({
  type,
  className,
  withLabel = false,
  children,
}) => (
  <span className={clsx(className)}>
    {type === 'tip' && <GoLightBulb />}
    {type === 'article' && <IoMdPaper />}
    {type === 'project' && <AiOutlineCode />}
    {withLabel && (
      <span className="ml-1">
        {type === 'tip' && 'Tip'}
        {type === 'article' && 'Article'}
        {type === 'project' && 'Project'}
      </span>
    )}
    {children && <span className="ml-1">{children}</span>}
  </span>
)

export default CategoryLabel
