import readingTime from 'reading-time'
import { loadFiles } from './fileLoader'

export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export interface Article {
  slug: string
  title: string
  date: string
  tags: string[]
  content: string
  excerpt: string
  readingTime: ReadingTime
}

export function loadArticles(): Article[] {
  const articleFiles = loadFiles('articles')

  const articles = articleFiles.map(fileData => {
    const {
      data: { slug, title, date, tags },
      content,
      excerpt,
    } = fileData
    return { slug, title, date, content, tags, excerpt, readingTime: readingTime(content) }
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
