import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import { NextSeo } from 'next-seo'
import { Tip, loadTips } from 'utils/contents/tips'
import Subheader from 'components/layout/Subheader'

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
    <Layout
      withoutNewsletter
      subheader={
        <Subheader title="Tips" description="Quick and helpful tips to improve your workflow." />
      }
    >
      <ContentList contents={tips} />
    </Layout>
  </>
)

export default TagsPage
