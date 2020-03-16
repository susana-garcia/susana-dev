import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { loadArticles, Article } from '../utils/articles'
import Layout from '../components/layout/Layout'
import ArticleList from '../components/ArticleList'
import Container from '../components/layout/Container'
import Bio from '../components/Bio'
import Divider from '../components/Divider'

export const getStaticProps: GetStaticProps = async () => {
  const articles = loadArticles()
  return { props: { articles } }
}

interface IndexPageProps {
  articles: Article[]
}

const IndexPage: NextPage<IndexPageProps> = ({ articles }) => (
  <Layout>
    <Container size="small">
      <Bio />
      <Divider className="my-10" />
      <ArticleList articles={articles} />
    </Container>
  </Layout>
)

export default IndexPage
