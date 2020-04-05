import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import NextLink from 'next/link'
import Markdown from 'components/layout/Markdown'
import Layout from 'components/layout/Layout'
import Link from 'components/Link'
import Container from 'components/layout/Container'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { NextSeo } from 'next-seo'
import TagList from 'components/TagList'
import PublishedAt from 'components/PublishedAt'
import CategoryLabel from 'components/CategoryLabel'
import { Routes } from 'utils/routes'
import { loadProjects, loadProject, ProjectMap } from 'utils/contents/projects'
import UpdatedAt from 'components/UpdatedAt'

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
            className="grid gap-6 grid-cols-1 md:grid-cols-2 items-center mb-12"
          >
            <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-900 shadow-lg w-full rounded-lg overflow-hidden">
              <img src={image} />
            </div>
            <header>
              <div className="mb-1 text-xs">
                <CategoryLabel type="project" withLabel className="mr-4" />
                <PublishedAt date={publishedAt} />
                <UpdatedAt publishedAt={publishedAt} className="ml-4" updatedAt={updatedAt} />
              </div>
              <h1 className="text-5xl font-black leading-tight mb-1">{title}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-400">{description}</p>
              <TagList tags={tags} />
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
            </header>
          </Container>
          <Container>
            <h1 className="hidden">{title}</h1>
            <Markdown content={content} />
            {(prev || next) && (
              <footer className="mt-16 grid grid-cols-2 font-bold">
                <div>
                  {prev && (
                    <NextLink {...Routes.article(prev.slug)}>
                      <a>
                        <FiArrowLeft className="mr-1" />
                        {prev.title}
                      </a>
                    </NextLink>
                  )}
                </div>
                <div className="text-right">
                  {next && (
                    <NextLink {...Routes.article(next.slug)}>
                      <a>
                        {next.title}
                        <FiArrowRight className="ml-1" />
                      </a>
                    </NextLink>
                  )}
                </div>
              </footer>
            )}
          </Container>
        </article>
      </Layout>
    </>
  )
}

export default ProjectPage
