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

export function loadAllPosts(): Post[] {
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
