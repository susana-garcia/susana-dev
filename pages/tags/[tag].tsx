import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTags, loadTagArticles } from '../../utils/tags'
import { Article } from '../../utils/articles'
import Layout from '../../components/Layout'
import TagList from '../../components/TagList'
import ArticleList from '../../components/ArticleList'
import Container from '../../components/Container'

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
      tags,
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
  <Layout title={tag}>
    <Container grid className="grid-cols-1 md:grid-cols-2">
      <h1 className="col-span-2 text-4xl font-black mb-8">Tag: {tag}</h1>
      <ArticleList articles={articles} />
    </Container>
    <Container>
      <hr className="mb-8" />
      <h4 className="font-light text-gray-600 mb-4">More Tags</h4>
      <TagList tags={tags} />
    </Container>
  </Layout>
)

export default TagPage
