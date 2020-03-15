import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadArticles, loadArticle, loadMorePosts, Article } from '../../utils/articles'
import ArticleList from '../../components/ArticleList'
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
