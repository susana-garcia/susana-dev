import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import { NextSeo } from 'next-seo'
import { Tip, loadTips } from 'utils/contents/tips'

export const getStaticProps: GetStaticProps = async () => {
  const tips = loadTips()

  return { props: { tips } }
}

interface TagsPageProps {
  tips: Tip[]
}

const TagsPage: NextPage<TagsPageProps> = ({ tips }) => (
  <>
    <NextSeo title="Tips" />
    <Layout subheader={<h1 className="my-12 text-4xl font-black text-center">Tips</h1>}>
      <ContentList contents={tips} className="mt-4" />
    </Layout>
  </>
)

export default TagsPage
