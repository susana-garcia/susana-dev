import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import { NextSeo } from 'next-seo'
import { Article, loadArticles } from 'utils/contents/articles'
import Subheader from 'components/layout/Subheader'

export const getStaticProps: GetStaticProps = async () => {
  const articles = loadArticles()

  return { props: { articles } }
}

interface ArticlesPageProps {
  articles: Article[]
}

const ArticlesPage: NextPage<ArticlesPageProps> = ({ articles }) => (
  <>
    <NextSeo title="Articles" />
    <Layout
      withoutNewsletter
      subheader={
        <Subheader title="Articles" description="Thoughts and experiences about code and design." />
      }
    >
      <ContentList contents={articles} className="mt-4" />
    </Layout>
  </>
)

export default ArticlesPage
