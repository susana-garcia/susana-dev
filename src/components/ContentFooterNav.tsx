import React from 'react'
import NextLink from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Content } from 'utils/contents'
import clsx from 'clsx'
import linkForContentType from 'utils/linkForContentType'

interface ContentFooterNavProps {
  className?: string
  prev?: Content
  next?: Content
}

const ContentFooterNav: React.FC<ContentFooterNavProps> = ({ prev, next, className }) => {
  const hasNavigation = prev || next

  if (!hasNavigation) return null

  return (
    <footer className={clsx('mt-16 grid grid-cols-2 font-bold', className)}>
      <div>
        {prev && (
          <NextLink {...linkForContentType(prev.type, prev.slug)}>
            <a>
              <FiArrowLeft className="mr-1" />
              {prev.title}
            </a>
          </NextLink>
        )}
      </div>
      <div className="text-right">
        {next && (
          <NextLink {...linkForContentType(next.type, next.slug)}>
            <a>
              {next.title}
              <FiArrowRight className="ml-1" />
            </a>
          </NextLink>
        )}
      </div>
    </footer>
  )
}

export default ContentFooterNav
