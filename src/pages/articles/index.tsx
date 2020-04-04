import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import Container from 'components/layout/Container'
import { NextSeo } from 'next-seo'
import { Article, loadArticles } from 'utils/contents/articles'

export const getStaticProps: GetStaticProps = async () => {
  const articles = loadArticles()

  return { props: { articles } }
}

interface ArticlesPageProps {
  articles: Article[]
}

const ArticlesPage: NextPage<ArticlesPageProps> = ({ articles }) => (
  <>
    <NextSeo title="articles" />
    <Layout subheader={<h1 className="my-12 text-4xl font-black  text-center">Articles</h1>}>
      <Container className="mt-4">
        <ContentList contents={articles} />
      </Container>
    </Layout>
  </>
)

export default ArticlesPage
