import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTags, loadTagArticles } from '../../utils/tags'
import { Article } from '../../utils/articles'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadTags().map(tag => `/tags/${tag}`),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params as { tag: string }

  const articles = loadTagArticles(tag)
  const tags = loadTags()

  return {
    props: {
      articles,
      tags,
      tag,
    },
  }
}

type TagPageProps = {
  tag: string
  tags: string[]
  articles: Article[]
}

const TagPage: NextPage<TagPageProps> = ({ articles, tag, tags }) => {
  return (
    <>
      <Head>
        <title>Tag: {tag}</title>
      </Head>
      <h1 className="text-4xl font-black mb-8">Tag: {tag}</h1>
      <ul>
        {articles.map(post => (
          <li key={post.slug} className="mb-8">
            <Link
              href={{ pathname: '/articles', query: { slug: post.slug } }}
              as={`/articles/${post.slug}`}
            >
              <a>
                <h3 className="text-xl font-black my-1">{post.title}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <hr className="my-10" />
      <h4 className="font-light text-gray-600 mb-4">More Tags</h4>
      <ul className="flex">
        {tags.map(tag => (
          <li
            key={tag}
            className="mr-1 text-xs text-gray-600 px-2 border border-gray-400 rounded-full"
          >
            <Link
              href={{ pathname: '/tags', query: { tag } }}
              as={`/tags/${tag}`}
            >
              <a>{tag}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TagPage
