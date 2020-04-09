import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadArticles, loadArticle, ArticleMap } from 'utils/contents/articles'
import Markdown from 'components/layout/Markdown'
import Layout from 'components/layout/Layout'
import Container from 'components/layout/Container'
import { NextSeo } from 'next-seo'
import TagList from 'components/TagList'
import ContentFooterNav from 'components/ContentFooterNav'
import ReadingTime from 'components/ReadingTime'
import PublishedAt from 'components/PublishedAt'
import CategoryLabel from 'components/CategoryLabel'
import UpdatedAt from 'components/UpdatedAt'
import { Routes } from 'utils/routes'
import Subheader from 'components/layout/Subheader'

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
            modifiedTime: updatedAt,
            authors: ['lailo'],
            tags: tags,
          },
        }}
      />
      <Layout
        subheader={
          <Subheader title={title}>
            <div className="text-center">
              <div className="flex justify-center text-xs ">
                <PublishedAt date={publishedAt} className="mr-4" />
                <ReadingTime readingTime={readingTime.text} className="mr-4" />
                <CategoryLabel type="article" withLabel />
              </div>
              <TagList tags={tags} />
              <UpdatedAt publishedAt={publishedAt} updatedAt={updatedAt} />
            </div>
          </Subheader>
        }
      >
        <Container>
          <article>
            <h1 className="hidden">{title}</h1>
            <Markdown content={content} />
            <ContentFooterNav prev={prev} next={next} />
          </article>
        </Container>
      </Layout>
    </>
  )
}

export default ArticlePage
