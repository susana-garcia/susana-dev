import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTags, loadContentsForTag } from 'utils/contents/tags'
import { Content } from 'utils/contents'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import Container from 'components/layout/Container'
import { FiHash } from 'react-icons/fi'
import { NextSeo } from 'next-seo'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import Link from 'components/Link'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadTags().map(tag => Routes.tag(tag).as),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params as { tag: string }

  const contents = loadContentsForTag(tag)

  return {
    props: {
      contents,
      tag,
    },
  }
}

type TagPageProps = {
  tag: string
  contents: Content[]
}

const TagPage: NextPage<TagPageProps> = ({ contents, tag }) => (
  <>
    <NextSeo title={`Tag #${tag}`} />
    <Layout
      subheader={
        <div className="mt-12 mb-8 text-center">
          <h1 className="col-span-2 text-4xl font-black">
            <FiHash />
            {tag}
          </h1>
          <div className="text-xs text-white hover:text-gray-200">
            <NextLink {...Routes.tags()} passHref>
              <Link title="All Tags">All Tags</Link>
            </NextLink>
          </div>
        </div>
      }
    >
      <ContentList contents={contents} className="mt-4" />
    </Layout>
  </>
)

export default TagPage
