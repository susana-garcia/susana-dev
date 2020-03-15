import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { loadArticles, Article } from '../utils/articles'
import Layout from '../components/layout/Layout'
import ArticleList from '../components/ArticleList'
import Container from '../components/layout/Container'

export const getStaticProps: GetStaticProps = async () => {
  const articles = loadArticles()
  return { props: { articles } }
}

interface IndexPageProps {
  articles: Article[]
}

const IndexPage: NextPage<IndexPageProps> = ({ articles }) => (
  <Layout>
    <Container grid className="grid-cols-1 md:grid-cols-2">
      <ArticleList articles={articles} />
    </Container>
  </Layout>
)

export default IndexPage
