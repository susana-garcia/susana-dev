import React from 'react'
import NextLink from 'next/link'
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

  const classNameForPath = (categoryPath: string) => {
    const isActive = pathname === categoryPath
    return clsx(
      'block text',
      'p-2 pt-10',
      'rounded-bl-md rounded-br-md',
      'hover:no-underline',
      'transition ease-in-out duration-200',
      {
        'hover:bg-primary hover:text-white': !isActive,
      },
      {
        'bg-primary': isActive,
        'text-white hover:text-white': isActive,
      }
    )
  }

  return (
    <header
      className={clsx({
        'bg-white border-b border-gray-300': children,
        'dark:bg-gray-900 dark:border-gray-800': children,
      })}
    >
      <Container size="large" grid className="h-12 py-0">
        <div className="flex items-center">
          <div className="mr-3">
            <NextLink {...Routes.home()}>
              <a
                title="Back home"
                className={clsx('font-black text-black dark:text-white hover:text-primary italic')}
              >
                Lailo
              </a>
            </NextLink>
          </div>
          <ul className="flex mr-auto -mt-8">
            <li className="mr-1">
              <NextLink {...Routes.articles()}>
                <a title="All Articles" className={classNameForPath(Routes.articles().as)}>
                  Articles
                </a>
              </NextLink>
            </li>
            <li className="mr-1">
              <NextLink {...Routes.tips()}>
                <a title="All Tips" className={classNameForPath(Routes.tips().as)}>
                  Tips
                </a>
              </NextLink>
            </li>
            <li className="mr-1">
              <NextLink {...Routes.projects()}>
                <a title="All Projects" className={classNameForPath(Routes.projects().as)}>
                  Projects
                </a>
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
