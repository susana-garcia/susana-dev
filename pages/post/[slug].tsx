import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import format from 'date-fns/format'
import Markdown from '../../components/Markdown'
import { loadPosts, loadPost, loadMorePosts, Post } from '../../utils/posts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadPosts().map(post => `/post/${post.slug}`),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as { slug: string }

  const post = loadPost(slug)
  const morePosts = loadMorePosts(slug)

  return {
    props: {
      post,
      morePosts,
    },
  }
}

type PostPageProps = {
  post: Post
  morePosts: Post[]
}

const PostPage: NextPage<PostPageProps> = ({ post, morePosts }) => {
  const { title, date, content } = post
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <header>
          <h1 className="text-4xl font-black">{title}</h1>
          <div className="text-sm text-gray-600">
            <time dateTime={date} itemProp="datePublished">
              {format(new Date(date), 'MMM d, yyyy')}
            </time>
          </div>
        </header>
        <hr className="my-6" />
        <Markdown content={content} />
        <hr className="my-6" />
        <footer>
          <h3 className="text-md font-thin mb-4">More Posts</h3>
          <ul>
            {morePosts.map(post => (
              <li key={post.slug}>
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
        </footer>
      </article>
    </>
  )
}

export default PostPage
