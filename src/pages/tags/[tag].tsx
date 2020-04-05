import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTags, loadContentsForTag } from 'utils/contents/tags'
import { Content } from 'utils/contents'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import { NextSeo } from 'next-seo'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import Link from 'components/Link'
import Subheader from 'components/layout/Subheader'

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
    <NextSeo title={`Tag: #${tag}`} />
    <Layout
      withoutNewsletter
      subheader={
        <Subheader title={`#${tag}`} description={`Content for tag #${tag}`}>
          <NextLink {...Routes.tags()} passHref>
            <Link title="All Tags" className="text-xs">
              More Tags
            </Link>
          </NextLink>
        </Subheader>
      }
    >
      <ContentList contents={contents} className="mt-4" />
    </Layout>
  </>
)

export default TagPage
