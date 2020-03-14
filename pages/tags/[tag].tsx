import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { loadTags, loadTagPosts } from '../../utils/tags'
import { Post } from '../../utils/posts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadTags().map(tag => `/tags/${tag}`),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params as { tag: string }

  const posts = loadTagPosts(tag)
  const tags = loadTags()

  return {
    props: {
      posts,
      tags,
      tag,
    },
  }
}

type TagPageProps = {
  tag: string
  tags: string[]
  posts: Post[]
}

const TagPage: NextPage<TagPageProps> = ({ posts, tag, tags }) => {
  return (
    <>
      <Head>
        <title>{tag}</title>
      </Head>
      <h1 className="text-4xl font-black mb-8">{tag}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug} className="mb-8">
            <Link
              href={{ pathname: '/post', query: { slug: post.slug } }}
              as={`/post/${post.slug}`}
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
