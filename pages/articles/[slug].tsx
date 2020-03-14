import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import format from 'date-fns/format'
import Markdown from '../../components/Markdown'
import {
  loadArticles,
  loadArticle,
  loadMorePosts,
  Article,
} from '../../utils/articles'

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
  const { title, date, content } = article
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <header>
          <h1 className="text-4xl font-black">{title}</h1>
          <div className="text-sm text-gray-600">
            <time dateTime={date} itemProp="datePublished">
              {format(new Date(date), 'MMM d, yyyy')}
            </time>
          </div>
        </header>
        <hr className="my-6" />
        <Markdown content={content} />
        <hr className="my-6" />
        <footer>
          <h3 className="text-md font-thin mb-4">More Posts</h3>
          <ul>
            {moreArticles.map(article => (
              <li key={article.slug}>
                <Link
                  href={{
                    pathname: '/articles',
                    query: { slug: article.slug },
                  }}
                  as={`/articles/${article.slug}`}
                >
                  <a>
                    <h3 className="text-xl font-black my-1">{article.title}</h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </>
  )
}

export default ArticlePage
