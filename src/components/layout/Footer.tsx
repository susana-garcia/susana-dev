import React from 'react'
import { FiRss, FiGithub, FiTwitter } from 'react-icons/fi'
import Container from 'components/layout/Container'
import Newsletter from 'components/Newsletter'

const Footer = () => {
  return (
    <footer className="py-6 mt-6">
      <Container className="grid gap-6 grid-cols-1 sm:grid-cols-none">
        <Newsletter className="col-span-2 my-6" />
        <hr className="col-span-2 border-gray-400 dark:border-gray-800 pb-4" />
        <div className="max-w-sm col-span-2 sm:col-auto">
          <h4 className="font-black text-gray-700 dark:text-gray-400 mb-2">About</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {process.env.SITE_ABOUT}
          </p>
        </div>
        <div className="col-span-2 sm:col-auto">
          <h4 className="font-black text-gray-700 dark:text-gray-400 mb-2">More</h4>
          <ul>
            <li className="">
              <a
                className="text-sm"
                href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
                title="Twitter account"
              >
                <FiTwitter className="mr-1" />
                Twitter
              </a>
            </li>
            <li className="">
              <a
                className="text-sm"
                href={`https://github.com/${process.env.GITHUB_USERNAME}`}
                title="Github account"
              >
                <FiGithub className="mr-1" />
                GitHub
              </a>
            </li>
            <li className="">
              <a className="text-sm" title="RSS" href="/rss.xml">
                <FiRss className="mr-1" />
                RSS feed
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
