import React from 'react'
import clsx from 'clsx'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import Container from 'components/layout/Container'
import Link from 'components/Link'
import Avatar from 'components/Avatar'
import NextLink from 'next/link'
import { Routes } from 'utils/routes'

interface BioProps {
  className?: string
}

const Bio: React.FC<BioProps> = ({ className }) => (
  <aside className={clsx(className)}>
    <Container className="text-center">
      <NextLink {...Routes.about()}>
        <a title="About">
          <Avatar size="small" />
        </a>
      </NextLink>
      <div className="text-lg font-bold mb-2">👋 I'm {process.env.AUTHORS_NAME}</div>
      <p className="font-light text-gray-700 dark:text-gray-300 max-w-md mx-auto">
        I write about APIs (Golang and Elixir), Kubernetes and machine learning.{' '}
        <NextLink {...Routes.about()}>
          <a title="About">More about me.</a>
        </NextLink>
      </p>
      <div className="mt-3">
        <Link
          href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
          title="Twitter account"
          className="hover:bg-primary hover:text-white rounded-full px-2 py-1 mx-1"
        >
          <FiTwitter />
        </Link>
        <Link
          href={`https://github.com/${process.env.GITHUB_USERNAME}`}
          title="Github account"
          className="hover:bg-primary hover:text-white rounded-full px-2 py-1 mx-1"
        >
          <FiGithub />
        </Link>
      </div>
    </Container>
  </aside>
)

export default Bio
