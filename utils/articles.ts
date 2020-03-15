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

export interface ArticleMap {
  article: Article
  next?: Article
  prev?: Article
}

export function loadArticle(slug: string): ArticleMap {
  const articles = loadArticles()

  const index = articles.findIndex(article => article.slug == slug)

  const articleMap: ArticleMap = {
    article: articles[index],
  }

  if (index > 0) articleMap.prev = articles[index - 1]
  if (index < articles.length - 1) articleMap.next = articles[index + 1]

  return articleMap
}
