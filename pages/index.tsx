import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps } from 'next'
import format from 'date-fns/format'
import { loadAllPosts, Post } from '../utils/posts'

export const getStaticProps: GetStaticProps = async () => {
  const posts = loadAllPosts().sort((a, b) => a.date.localeCompare(b.date))
  return { props: { posts } }
}

interface IndexPageProps {
  posts: Post[]
}

const IndexPage: NextPage<IndexPageProps> = ({ posts }) => (
  <>
    <Head>
      <title>My Blog</title>
    </Head>
    <ul>
      {posts.map(post => (
        <li key={post.slug} className="mb-10">
          <time
            dateTime={post.date}
            itemProp="datePublished"
            className="text-xs text-gray-700"
          >
            {format(new Date(post.date), 'MMM d, yyyy')}
          </time>
          <Link
            href={{ pathname: '/post', query: { slug: post.slug } }}
            as={`/post/${post.slug}`}
          >
            <a>
              <h3 className="text-xl font-black my-1">{post.title}</h3>
            </a>
          </Link>

          <ul className="flex">
            {post.tags.map(tag => (
              <li
                key={tag}
                className="mr-1 text-xs text-gray-600 px-2 border border-gray-400 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
)

export default IndexPage
