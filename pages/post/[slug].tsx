import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import marked from 'marked'
import hljs from 'highlight.js'
import format from 'date-fns/format'
import {
  loadAllPosts,
  loadPostBySlug,
  loadMorePostsForSlug,
  Post,
} from '../../utils/posts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: loadAllPosts().map(p => `/post/${p.slug}`),
  fallback: false,
})

type GetStaticProps2 = {
  params: {
    slug: string
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as { slug: string }

  const post = loadPostBySlug(slug)
  const morePosts = loadMorePostsForSlug(slug)

  return {
    props: {
      title: post.title,
      date: post.date,
      contentHTML: marked(post.content, {
        highlight: (code, lang) => hljs.highlight(lang, code).value,
      }),
      morePosts,
    },
  }
}

type PostPageProps = {
  title: string
  date: string
  contentHTML: string
  morePosts: Post[]
}

const PostPage: NextPage<PostPageProps> = ({
  title,
  date,
  contentHTML,
  morePosts,
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <main>
      <article>
        <header>
          <h1>{title}</h1>
          <div>
            <time dateTime={date} itemProp='datePublished'>
              {format(new Date(date), 'MMM d, yyyy')}
            </time>
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        <footer>
          <ul>
            {morePosts.map(post => (
              <li key={post.slug}>
                <Link
                  href={{ pathname: '/post', query: { slug: post.slug } }}
                  as={`/post/${post.slug}`}
                >
                  <a>
                    <h3>{post.title}</h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </main>
  </>
)

export default PostPage
