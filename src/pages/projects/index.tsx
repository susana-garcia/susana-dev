import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/layout/Layout'
import ContentList from 'components/ContentList'
import { NextSeo } from 'next-seo'
import { loadProjects, Project } from 'utils/contents/projects'

export const getStaticProps: GetStaticProps = async () => {
  const projects = loadProjects()

  return { props: { projects } }
}

interface ArticlesPageProps {
  projects: Project[]
}

const ArticlesPage: NextPage<ArticlesPageProps> = ({ projects }) => (
  <>
    <NextSeo title="Projects" />
    <Layout
      withoutNewsletter
      subheader={<h1 className="my-12 text-4xl font-black  text-center">Projects</h1>}
    >
      <ContentList contents={projects} className="mt-4" />
    </Layout>
  </>
)

export default ArticlesPage
