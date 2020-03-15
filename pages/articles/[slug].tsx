import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import format from 'date-fns/format'
import { loadArticles, loadArticle, loadMorePosts, Article } from '../../utils/articles'
import ArticleList from '../../components/ArticleList'
import Markdown from '../../components/Markdown'
import Layout from '../../components/Layout'
import TagList from '../../components/TagList'
import Container from '../../components/Container'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadArticles().map(post => `/articles/${post.slug}`),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as { slug: string }

  const article = loadArticle(slug)
  const moreArticles = loadMorePosts(slug)

  return {
    props: {
      article,
      moreArticles,
    },
  }
}

type ArticlePageProps = {
  article: Article
  moreArticles: Article[]
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article, moreArticles }) => {
  const { title, date, content, tags } = article
  const hasMoreArticles = moreArticles.length > 0

  return (
    <Layout title={title}>
      <article>
        <Container size="small">
          <header>
            <h1 className="text-4xl font-black">{title}</h1>
            <div className="text-sm text-gray-600">
              <time dateTime={date} itemProp="datePublished">
                {format(new Date(date), 'MMM d, yyyy')}
              </time>
            </div>
            <div className="mb-6">
              <TagList tags={tags} />
            </div>
          </header>
          <Markdown content={content} />
        </Container>
        {hasMoreArticles && (
          <footer>
            <Container grid size="small">
              <hr className="my-6" />
              <ArticleList articles={moreArticles} />
            </Container>
          </footer>
        )}
      </article>
    </Layout>
  )
}

export default ArticlePage
