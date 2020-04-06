import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Markdown from 'components/layout/Markdown'
import Layout from 'components/layout/Layout'
import Link from 'components/Link'
import ContentFooterNav from 'components/ContentFooterNav'
import Container from 'components/layout/Container'
import { FiArrowUpRight } from 'react-icons/fi'
import { NextSeo } from 'next-seo'
import TagList from 'components/TagList'
import PublishedAt from 'components/PublishedAt'
import CategoryLabel from 'components/CategoryLabel'
import { Routes } from 'utils/routes'
import { loadProjects, loadProject, ProjectMap } from 'utils/contents/projects'
import UpdatedAt from 'components/UpdatedAt'
import Card from 'components/Card'
import DownloadFromAppStoreSVG from 'assets/svg/download-from-app-store.svg'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadProjects().map(({ slug }) => Routes.project(slug).as),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as { slug: string }

  const projectMap = loadProject(slug)

  return {
    props: projectMap,
  }
}

const ProjectPage: NextPage<ProjectMap> = ({ project, prev, next }) => {
  const { slug, description, title, publishedAt, updatedAt, content, tags, image, url } = project

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description: description,
          url: `${process.env.SITE_URL}${Routes.project(slug).as}`,
          type: 'article',
          article: {
            publishedTime: publishedAt,
            tags: tags,
          },
        }}
      />
      <Layout>
        <article>
          <Container
            size="large"
            className="grid gap-6 grid-cols-1 md:grid-cols-2 items-center my-4 md:my-8"
          >
            <Card noPadding className="shadow-lg rounded-lg overflow-hidden min-h-48">
              <img src={image} />
            </Card>
            <header>
              <div className="mb-1 text-xs">
                <CategoryLabel type="project" withLabel className="mr-4" />
                <PublishedAt date={publishedAt} />
                <UpdatedAt publishedAt={publishedAt} className="ml-4" updatedAt={updatedAt} />
              </div>
              <h1 className="text-5xl font-black leading-tight mb-1">{title}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-400">{description}</p>
              <TagList tags={tags} />
              {tags.includes('web') && (
                <div className="mt-4">
                  <Link
                    href={url}
                    title={title}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="border border-primary text-lg"
                  >
                    <FiArrowUpRight className="mr-1" />
                    Visit Project
                  </Link>
                </div>
              )}
              {tags.includes('ios') && (
                <div className="mt-4">
                  <a
                    href={url}
                    title={title}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                  >
                    <DownloadFromAppStoreSVG />
                  </a>
                </div>
              )}
            </header>
          </Container>
          <Container>
            <hr className="mb-6 md:hidden border-gray-500 dark:border-gray-700" />
            <h1 className="hidden">{title}</h1>
            <Markdown content={content} />
            <ContentFooterNav prev={prev} next={next} />
          </Container>
        </article>
      </Layout>
    </>
  )
}

export default ProjectPage
