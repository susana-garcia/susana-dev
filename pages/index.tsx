import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { loadArticles, Article } from '../utils/articles'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'

export const getStaticProps: GetStaticProps = async () => {
  const articles = loadArticles()
  return { props: { articles } }
}

interface IndexPageProps {
  articles: Article[]
}

const IndexPage: NextPage<IndexPageProps> = ({ articles }) => (
  <Layout>
    <ArticleList articles={articles} />
  </Layout>
)

export default IndexPage
