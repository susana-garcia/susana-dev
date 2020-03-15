import React from 'react'
import clsx from 'clsx'
import { FiTwitter, FiGithub } from 'react-icons/fi'

interface BioProps {
  className?: string
}

const Bio: React.FC<BioProps> = ({ className }) => (
  <aside className={clsx('flex flex-col md:flex-row md:items-center', className)}>
    <div className="block mb-4 md:mb-0 mr-4 min-h-24 min-w-24">
      <img
        className="block h-24 w-24 rounded-full"
        src="https://www.gravatar.com/avatar/a2d6b99998cc640643196c2ebc7e94b6?s=256"
      />
    </div>
    <div>
      <div className="text-lg font-bold">👋 I'm Lailo</div>
      <p className="text font-light text-gray-700 dark:text-gray-300">
        A software engineer passionate about simplicity in code and design. Currently focused on
        Swift, TypeScript and Golang.
      </p>
      <div className="mt-1">
        <a href="https://twitter.com/lailo_ch/" title="Twitter account" className="mr-4">
          <FiTwitter className="mr-1" />
          Twitter
        </a>
        <a href="github.com/lailo-ch/" title="Github account" className="mr-4">
          <FiGithub className="mr-1" />
          Github
        </a>
      </div>
    </div>
  </aside>
)

export default Bio
