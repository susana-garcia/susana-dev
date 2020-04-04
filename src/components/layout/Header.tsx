import React from 'react'
import NextLink from 'next/link'
import Link from 'components/Link'
import dynamic from 'next/dynamic'
import Container from 'components/layout/Container'
import clsx from 'clsx'
import { Routes } from 'utils/routes'
import { useRouter } from 'next/router'

const DarkModeToggle = dynamic(() => import('components/DarkModeToggle'), {
  ssr: false,
})

const Header: React.FC = ({ children }) => {
  const { pathname } = useRouter()

  return (
    <header
      className={clsx({
        'bg-white border-b border-gray-300': children,
        'dark:bg-gray-900 dark:border-gray-800': children,
      })}
    >
      <Container size="fluid" grid className="h-12 py-0">
        <div className="flex items-center">
          <div>
            <NextLink {...Routes.home()}>
              <Link title="Back home" className={clsx('font-black text-black dark:text-white')}>
                Lailo
              </Link>
            </NextLink>
          </div>
          <ul className="flex mr-auto">
            <li className="mr-1">
              <NextLink {...Routes.articles()} passHref>
                <Link
                  title="All Articles"
                  className={clsx('text-sm', {
                    'bg-primary text-white': pathname === Routes.articles().as,
                  })}
                >
                  Articles
                </Link>
              </NextLink>
            </li>
            <li className="mr-1">
              <NextLink {...Routes.tips()} passHref>
                <Link
                  title="Quick Tags"
                  className={clsx('text-sm', {
                    'bg-primary text-white': pathname === Routes.tips().as,
                  })}
                >
                  Tips
                </Link>
              </NextLink>
            </li>
            <li className="mr-1">
              <NextLink {...Routes.tags()} passHref>
                <Link
                  title="Quick Tags"
                  className={clsx('text-sm', {
                    'bg-primary text-white': pathname === Routes.tags().as,
                  })}
                >
                  Tags
                </Link>
              </NextLink>
            </li>
          </ul>
          <div>
            <DarkModeToggle />
          </div>
        </div>
      </Container>
      {children && <Container>{children}</Container>}
    </header>
  )
}

export default Header
