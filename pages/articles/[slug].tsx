import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadArticles, loadArticle, ArticleMap } from '../../utils/articles'
import Link from 'next/link'
import Markdown from '../../components/layout/Markdown'
import Layout from '../../components/layout/Layout'
import TagList from '../../components/TagList'
import Container from '../../components/layout/Container'
import ReadingTime from '../../components/ReadingTime'
import PublishedAt from '../../components/PublishedAt'

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
  const { title, date, content, tags } = article

  return (
    <Layout title={title}>
      <Container size="small">
        <article>
          <header>
            <div className="flex justify-between">
              <PublishedAt date={article.date} />
              <ReadingTime readingTime={article.readingTime} />
            </div>
            <h1 className="text-4xl font-black">{title}</h1>
            <div className="mb-6">
              <TagList tags={tags} />
            </div>
          </header>
          <Markdown content={content} />
          <footer className="mt-16 grid grid-cols-2 font-bold">
            <div>
              {prev && (
                <Link
                  href={{ pathname: '/articles', query: { slug: prev.slug } }}
                  as={`/articles/${prev.slug}`}
                >
                  <a>← {prev.title}</a>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link
                  href={{ pathname: '/articles', query: { slug: next.slug } }}
                  as={`/articles/${next.slug}`}
                >
                  <a>{next.title} →</a>
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
