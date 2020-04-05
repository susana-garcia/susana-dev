import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTips, loadTip, TipMap } from 'utils/contents/tips'
import Link from 'next/link'
import Markdown from 'components/layout/Markdown'
import Layout from 'components/layout/Layout'
import Container from 'components/layout/Container'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { NextSeo } from 'next-seo'
import TagList from 'components/TagList'
import PublishedAt from 'components/PublishedAt'
import CategoryLabel from 'components/CategoryLabel'
import UpdatedAt from 'components/UpdatedAt'
import { Routes } from 'utils/routes'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadTips().map(({ slug }) => Routes.tip(slug).as),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as { slug: string }

  const tipMap = loadTip(slug)

  return {
    props: tipMap,
  }
}

const TipsPage: NextPage<TipMap> = ({ tip, prev, next }) => {
  const { slug, description, title, publishedAt, updatedAt, content, tags } = tip

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description: description,
          url: `${process.env.SITE_URL}${Routes.tip(slug).as}`,
          type: 'article',
          article: {
            publishedTime: publishedAt,
            tags: tags,
          },
        }}
      />
      <Layout>
        <Container>
          <article>
            <div className="bg-white dark:bg-gray-975 border border-gray-100 dark:border-gray-900 shadow-md rounded-lg overflow-hidden">
              <header className="px-6 py-12 text-center bg-primary text-white">
                <CategoryLabel type="tip" withLabel className="mb-6 block" />
                <h1 className="text-5xl font-black leading-tight mb-2">{title}</h1>
              </header>
              <div className="px-6 py-2 flex flex-col md:flex-row items-center md:justify-between">
                <TagList tags={tags} />
                <div className="text-xs text-gray-500">
                  <PublishedAt date={publishedAt} />
                  <UpdatedAt publishedAt={publishedAt} updatedAt={updatedAt} className="ml-2" />
                </div>
              </div>
              <div className="p-6 -mt-6">
                <h1 className="hidden">{title}</h1>
                <Markdown content={content} />
              </div>
            </div>
            {(prev || next) && (
              <footer className="mt-16 grid grid-cols-2 font-bold">
                <div>
                  {prev && (
                    <Link {...Routes.article(prev.slug)}>
                      <a>
                        <FiArrowLeft className="mr-1" />
                        {prev.title}
                      </a>
                    </Link>
                  )}
                </div>
                <div className="text-right">
                  {next && (
                    <Link {...Routes.article(next.slug)}>
                      <a>
                        {next.title}
                        <FiArrowRight className="ml-1" />
                      </a>
                    </Link>
                  )}
                </div>
              </footer>
            )}
          </article>
        </Container>
      </Layout>
    </>
  )
}

export default TipsPage
