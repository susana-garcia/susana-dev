import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import Container from 'components/layout/Container'
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
      <Container className="mt-4">
        <ContentList contents={tips} />
      </Container>
    </Layout>
  </>
)

export default TagsPage
