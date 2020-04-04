import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { loadContents, Content } from 'utils/contents'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import Container from 'components/layout/Container'
import Bio from 'components/Bio'
import { generateRSS } from 'utils/generateRSS'
import { NextSeo } from 'next-seo'

export const getStaticProps: GetStaticProps = async () => {
  const contents = loadContents()

  if (process.env.GENERATE_RSS) {
    generateRSS(contents)
  }

  return { props: { contents } }
}

interface IndexPageProps {
  contents: Content[]
}

const IndexPage: NextPage<IndexPageProps> = ({ contents }) => (
  <>
    <NextSeo title={process.env.SITE_DESCRIPTION} />
    <Layout subheader={<Bio />}>
      <Container className="mt-4">
        <ContentList contents={contents} />
      </Container>
    </Layout>
  </>
)

export default IndexPage
