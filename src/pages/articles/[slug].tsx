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
import Divider from 'components/Divider'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

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
  const { title, date, content, tags, readingTime } = article

  return (
    <Layout
      title={title}
      subheader={
        <header className="mb-12">
          <h1 className="text-5xl font-black text-white leading-tight mb-2">{title}</h1>
          <div className="text-gray-200">
            <PublishedAt date={date} className="mr-3" />
            <ReadingTime readingTime={readingTime} className="mr-2" />
            <TagList tags={tags} light />
          </div>
        </header>
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
  )
}

export default ArticlePage
