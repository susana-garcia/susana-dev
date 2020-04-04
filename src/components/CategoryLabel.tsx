import React from 'react'
import clsx from 'clsx'
import { ContentType } from 'utils/contents'
import { GoLightBulb } from 'react-icons/go'
import { IoMdPaper } from 'react-icons/io'
import { AiOutlineCode } from 'react-icons/ai'
import { FiHash } from 'react-icons/fi'

interface CategoryLabelProps {
  type: ContentType | 'tag'
  className?: string
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ type, className, children }) => (
  <span className={clsx(className)}>
    {type === 'tip' && <GoLightBulb />}
    {type === 'article' && <IoMdPaper />}
    {type === 'project' && <AiOutlineCode />}
    {type === 'tag' && <FiHash />}
    {children && <span className="ml-1">{children}</span>}
  </span>
)

export default CategoryLabel
