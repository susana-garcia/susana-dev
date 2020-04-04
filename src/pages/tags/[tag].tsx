import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTags, loadTagArticles } from 'utils/contents/tags'
import { Article } from 'utils/contents/articles'
import Layout from 'components/layout/Layout'
import TagList from 'components/TagList'
import ArticleList from 'components/ArticleList'
import Container from 'components/layout/Container'
import { FiHash } from 'react-icons/fi'
import { NextSeo } from 'next-seo'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadTags().map(tag => `/tags/${tag}`),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params as { tag: string }

  const articles = loadTagArticles(tag)
  const tags = loadTags()

  return {
    props: {
      articles,
      tags: tags.filter(t => t !== tag),
      tag,
    },
  }
}

type TagPageProps = {
  tag: string
  tags: string[]
  articles: Article[]
}

const TagPage: NextPage<TagPageProps> = ({ articles, tag, tags }) => (
  <>
    <NextSeo title={`Tag #${tag}`} />
    <Layout
      subheader={
        <div className="mt-12 mb-8">
          <h1 className="col-span-2 text-4xl font-black">
            <FiHash />
            {tag}
          </h1>
          <div className="text-xs text-white hover:text-gray-200">
            <TagList tags={tags} />
          </div>
        </div>
      }
    >
      <Container>
        <ArticleList articles={articles} />
      </Container>
    </Layout>
  </>
)

export default TagPage
