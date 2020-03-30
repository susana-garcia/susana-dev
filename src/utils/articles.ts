import readingTime from 'reading-time'
import slugify from 'slugify'
import { loadFiles } from 'utils/fileLoader'

export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export interface Article {
  slug: string
  publishedAt: string
  updatedAt: string
  title: string
  type: 'article' | 'tip'
  tags: string[]
  content: string
  description: string
  readingTime: ReadingTime
}

export function loadArticles(): Article[] {
  const articleFiles = loadFiles('articles')

  const articles = articleFiles.map(fileData => {
    const {
      data: { title, description, tags, publishedAt, updatedAt, type },
      content,
    } = fileData

    const slug = slugify(title, { lower: true })

    return {
      updatedAt,
      publishedAt,
      slug,
      title,
      description,
      content,
      tags,
      type,
      readingTime: readingTime(content),
    }
  })

  return articles
    .filter(article => article.publishedAt || process.env.NODE_ENV === 'development')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
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
