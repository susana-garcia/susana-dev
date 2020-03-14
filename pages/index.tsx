import React from 'react'
import format from 'date-fns/format'
import Head from 'next/head'
import { NextPage, GetStaticProps } from 'next'
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
    <main>
      <div>
        <h1>My Blog</h1>
        <h2>Posts</h2>
        {posts.map(post => (
          <article key={post.slug}>
            <time dateTime={post.date} itemProp='datePublished'>
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>
            <h3>{post.title}</h3>
            <ul>
              {post.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  </>
)

export default IndexPage
