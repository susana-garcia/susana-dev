import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTags, loadContentsForTag } from 'utils/contents/tags'
import { Content } from 'utils/contents'
import Layout from 'components/layout/Layout'
import TagList from 'components/TagList'
import ContentList from 'components/ContentList'
import Container from 'components/layout/Container'
import { FiHash } from 'react-icons/fi'
import { NextSeo } from 'next-seo'
import { Routes } from 'utils/routes'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadTags().map(tag => Routes.tag(tag).as),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params as { tag: string }

  const contents = loadContentsForTag(tag)
  const tags = loadTags()

  return {
    props: {
      contents,
      tags: tags.filter(t => t !== tag),
      tag,
    },
  }
}

type TagPageProps = {
  tag: string
  tags: string[]
  contents: Content[]
}

const TagPage: NextPage<TagPageProps> = ({ contents, tag, tags }) => (
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
        <ContentList contents={contents} />
      </Container>
    </Layout>
  </>
)

export default TagPage
