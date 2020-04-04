import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTips, loadTip, TipMap } from 'utils/contents/tips'
import Link from 'next/link'
import Markdown from 'components/layout/Markdown'
import Layout from 'components/layout/Layout'
import Container from 'components/layout/Container'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { NextSeo } from 'next-seo'
import MetaInfos from 'components/MetaInfos'
import format from 'date-fns/format'
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
      <Layout
        subheader={
          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl font-black leading-tight mb-2">{title}</h1>
            <MetaInfos alignCenter contentType="tip" publishedAt={publishedAt} tags={tags} />
          </div>
        }
      >
        <Container>
          <article className="bg-white dark:bg-gray-975 border border-gray-100 dark:border-gray-900 shadow p-6 rounded">
            {publishedAt !== updatedAt && (
              <p className="mb-8 text-xs text-gray-500">
                Edited at {format(new Date(updatedAt), 'MMM d, yyyy')}
              </p>
            )}
            <h1 className="hidden">{title}</h1>
            <Markdown content={content} />
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
