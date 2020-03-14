import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import format from 'date-fns/format'
import {
  loadArticles,
  loadArticle,
  loadMorePosts,
  Article,
} from '../../utils/articles'
import ArticleList from '../../components/ArticleList'
import Markdown from '../../components/Markdown'
import Layout from '../../components/Layout'
import TagList from '../../components/TagList'

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
        <header>
          <h1 className="text-4xl font-black">{title}</h1>
          <div className="text-sm text-gray-600">
            <time dateTime={date} itemProp="datePublished">
              {format(new Date(date), 'MMM d, yyyy')}
            </time>
          </div>
          <div>
            <TagList tags={tags} />
          </div>
        </header>
        <hr className="my-6" />
        <Markdown content={content} />
        <hr className="my-6" />
        {hasMoreArticles && (
          <footer>
            <ArticleList articles={moreArticles} />
          </footer>
        )}
      </article>
    </Layout>
  )
}

export default ArticlePage
