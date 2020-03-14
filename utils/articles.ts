import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const ARTICLES_DIR = path.resolve(process.cwd(), 'content/articles')

export type Article = {
  slug: string
  title: string
  date: string
  tags: string[]
  content: string
}

export function loadArticles(): Article[] {
  const articleFiles = fs.readdirSync(ARTICLES_DIR)

  const articles = articleFiles.map(fileName => {
    const filePath = path.join(ARTICLES_DIR, fileName)
    const fileData = fs.readFileSync(filePath, 'utf8')
    const {
      data: { slug, title, date, tags },
      content,
    } = matter(fileData)
    return { slug, title, date, content, tags }
  })

  return articles.sort((a, b) => a.date.localeCompare(b.date))
}

export function loadArticle(slug: string): Article {
  return loadArticles().find(post => post.slug === slug)
}

export function loadMorePosts(slug: string) {
  return loadArticles()
    .filter(post => post.slug !== slug)
    .slice(0, 3)
}
