import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { loadTags, Tag } from 'utils/contents/tags'
import Layout from 'components/layout/Layout'
import Container from 'components/layout/Container'
import { NextSeo } from 'next-seo'
import { Routes } from 'utils/routes'
import NextLink from 'next/link'
import Link from 'components/Link'
import { FiHash } from 'react-icons/fi'
import Subheader from 'components/layout/Subheader'

export const getStaticProps: GetStaticProps = async () => {
  const tags = loadTags()

  return { props: { tags } }
}

interface TagsPageProps {
  tags: Tag[]
}

const TagsPage: NextPage<TagsPageProps> = ({ tags }) => (
  <>
    <NextSeo title="Tags" />
    <Layout
      withoutNewsletter
      subheader={<Subheader title="Tags" description="Tags overview from all content types." />}
    >
      <Container>
        <ul className="overflow-x-hidden py-2 text-center">
          {tags.map(tag => (
            <ul key={tag} className="inline-block mb-4 mr-2">
              <NextLink {...Routes.tag(tag)} passHref>
                <Link title={tag} className="text-lg border border-primary">
                  <FiHash />
                  {tag}
                </Link>
              </NextLink>
            </ul>
          ))}
        </ul>
      </Container>
    </Layout>
  </>
)

export default TagsPage
