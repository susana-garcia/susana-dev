import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadArticles, loadArticle, ArticleMap } from 'utils/contents/articles'
import Link from 'next/link'
import Markdown from 'components/layout/Markdown'
import Layout from 'components/layout/Layout'
import Container from 'components/layout/Container'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { NextSeo } from 'next-seo'
import TagList from 'components/TagList'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'
import CategoryLabel from 'components/CategoryLabel'
import UpdatedAt from 'components/UpdatedAt'
import { Routes } from 'utils/routes'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadArticles().map(({ slug }) => Routes.article(slug).as),
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
  const { slug, description, title, publishedAt, updatedAt, content, tags, readingTime } = article

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description: description,
          url: `${process.env.SITE_URL}${Routes.article(slug).as}`,
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
            <div className="flex justify-center text-xs ">
              <PublishedAt date={publishedAt} className="mr-4" />
              <ReadingTime readingTime={readingTime.text} className="mr-4" />
              <CategoryLabel type="article" withLabel />
            </div>
            <TagList tags={tags} />
            <UpdatedAt publishedAt={publishedAt} updatedAt={updatedAt} />
          </div>
        }
      >
        <Container>
          <article>
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

export default ArticlePage
