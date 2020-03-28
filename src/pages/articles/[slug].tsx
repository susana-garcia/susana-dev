import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadArticles, loadArticle, ArticleMap } from 'utils/articles'
import Link from 'next/link'
import Markdown from 'components/layout/Markdown'
import Layout from 'components/layout/Layout'
import TagList from 'components/TagList'
import Container from 'components/layout/Container'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { NextSeo } from 'next-seo'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadArticles().map(post => `/articles/${post.slug}`),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as { slug: string }

  const articleMap = loadArticle(slug)

  return {
    props: articleMap,
  }
}

const ArticlePage: NextPage<ArticleMap> = ({ article, prev, next }) => {
  const { slug, excerpt, title, date, content, tags, readingTime } = article

  return (
    <>
      <NextSeo
        title={title}
        description={excerpt}
        openGraph={{
          title,
          description: excerpt,
          url: `${process.env.SITE_URL}/articles/${slug}`,
          type: 'article',
          article: {
            publishedTime: date,
            tags: tags,
          },
        }}
      />
      <Layout
        subheader={
          <Container size="small" className="mt-12 mb-8">
            <h1 className="text-5xl font-black leading-tight mb-2">{title}</h1>
            <div className="text-gray-800 dark:text-gray-200 grid grid-cols-1 md:grid-cols-2 items-center">
              <div>
                <PublishedAt date={date} className="mr-3" />
                <ReadingTime readingTime={readingTime} />
              </div>
              <div className="md:text-right">
                <TagList tags={tags} />
              </div>
            </div>
          </Container>
        }
      >
        <Container size="small">
          <article>
            <h1 className="hidden">{title}</h1>
            <Markdown content={content} />
            <footer className="mt-16 grid grid-cols-2 font-bold">
              <div>
                {prev && (
                  <Link
                    href={{ pathname: '/articles', query: { slug: prev.slug } }}
                    as={`/articles/${prev.slug}`}
                  >
                    <a>
                      <FiArrowLeft className="mr-1" />
                      {prev.title}
                    </a>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link
                    href={{ pathname: '/articles', query: { slug: next.slug } }}
                    as={`/articles/${next.slug}`}
                  >
                    <a>
                      {next.title}
                      <FiArrowRight className="ml-1" />
                    </a>
                  </Link>
                )}
              </div>
            </footer>
          </article>
        </Container>
      </Layout>
    </>
  )
}

export default ArticlePage
