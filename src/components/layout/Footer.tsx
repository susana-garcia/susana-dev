import React from 'react'
import Container from 'components/layout/Container'
import Newsletter from 'components/Newsletter'
import TypeLabel from 'components/CategoryLabel'
import NextLink from 'next/link'
import Link from 'components/Link'
import { Routes } from 'utils/routes'
import { FiRss, FiGithub, FiTwitter } from 'react-icons/fi'
const Footer = () => {
  return (
    <footer className="py-8">
      <Container>
        <Newsletter className="mb-12" />
        <div className="grid gap-6 grid-cols-3 sm:grid-cols-4">
          <div className="col-span-3 md:col-span-2">
            <h4 className="font-black text-gray-700 dark:text-gray-400 mb-2">About</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              {process.env.SITE_ABOUT}
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-black text-gray-700 dark:text-gray-400 mb-2">Follow</h4>
            <ul className="-ml-2">
              <li>
                <Link
                  className="text-sm"
                  href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
                  title="Twitter account"
                >
                  <FiTwitter className="mr-1" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm"
                  href={`https://github.com/${process.env.GITHUB_USERNAME}`}
                  title="Github account"
                >
                  <FiGithub className="mr-1" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link className="text-sm" title="RSS" href="/rss.xml">
                  <FiRss className="mr-1" />
                  RSS feed
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-black text-gray-700 dark:text-gray-400 mb-2">Sitemap</h4>
            <ul className="-ml-2">
              <li>
                <NextLink {...Routes.articles()} passHref>
                  <Link title="All Articles" className="text-sm">
                    <TypeLabel type="article">Articles</TypeLabel>
                  </Link>
                </NextLink>
              </li>
              <li>
                <NextLink {...Routes.tips()} passHref>
                  <Link title="Quick Tags" className="text-sm">
                    <TypeLabel type="tip">Tips</TypeLabel>
                  </Link>
                </NextLink>
              </li>
              <li>
                <NextLink {...Routes.projects()} passHref>
                  <Link title="All Projects" className="text-sm">
                    <TypeLabel type="project">Projects</TypeLabel>
                  </Link>
                </NextLink>
              </li>
              <li>
                <NextLink {...Routes.tags()} passHref>
                  <Link title="All Tags" className="text-sm">
                    <TypeLabel type="tag">Tags</TypeLabel>
                  </Link>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
