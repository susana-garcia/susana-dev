import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/layout/Layout'
import Subheader from 'components/layout/Subheader'
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
      subheader={
        <Subheader
          title="Projects"
          description="Personal projects I'm currently working on or I have in the past."
        />
      }
    >
      <ContentList contents={projects} />
    </Layout>
  </>
)

export default ArticlesPage
