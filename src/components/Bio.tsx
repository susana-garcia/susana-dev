import React from 'react'
import clsx from 'clsx'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import Container from './layout/Container'

interface BioProps {
  className?: string
}

const Bio: React.FC<BioProps> = ({ className }) => (
  <aside className={clsx('my-8', className)}>
    <Container className="text-center">
      <div className="min-h-24 min-w-24 mb-4">
        <img className="inline h-24 w-24 rounded-full" src={process.env.PROFILE_IMAGE} />
      </div>
      <div className="text-lg font-bold mb-2">👋 I'm {process.env.AUTHORS_NAME}</div>
      <p className="font-light text-gray-700 dark:text-gray-300 max-w-md mx-auto">
        Passionate about simplicity in{' '}
        <span className=" font-mono font-thin bg-gray-800 p-1 text-gray-200 text-xs italic rounded-sm border-l-4 border-primary">
          code
        </span>{' '}
        and <span className="font-serif font-bold underline">design</span>.
      </p>
      <div className="mt-3">
        <a
          href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
          title="Twitter account"
          className="hover:bg-primary hover:text-white rounded-full px-2 py-1 mx-1"
        >
          <FiTwitter />
        </a>
        <a
          href={`https://github.com/${process.env.GITHUB_USERNAME}`}
          title="Github account"
          className="hover:bg-primary hover:text-white rounded-full px-2 py-1 mx-1"
        >
          <FiGithub />
        </a>
      </div>
    </Container>
  </aside>
)

export default Bio
