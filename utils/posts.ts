import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const POSTS_DIR = path.resolve(process.cwd(), 'posts')

export type Post = {
  slug: string
  title: string
  date: string
  tags: string[]
  content: string
}

export function loadPosts(): Post[] {
  const postFiles = fs.readdirSync(POSTS_DIR)

  return postFiles.map(fileName => {
    const filePath = path.join(POSTS_DIR, fileName)
    const fileData = fs.readFileSync(filePath, 'utf8')
    const {
      data: { slug, title, date, tags },
      content,
    } = matter(fileData)
    return { slug, title, date, content, tags }
  })
}

export function loadPost(slug: string): Post {
  return loadPosts().find(post => post.slug === slug)
}

export function loadMorePosts(slug: string) {
  return loadPosts()
    .filter(post => post.slug !== slug)
    .slice(0, 3)
}
