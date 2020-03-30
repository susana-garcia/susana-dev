import readingTime from 'reading-time'
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
  excerpt: string
  readingTime: ReadingTime
}

export function loadArticles(): Article[] {
  const articleFiles = loadFiles('articles')

  const articles = articleFiles.map(fileData => {
    const {
      data: { slug, title, tags, publishedAt, updatedAt, type },
      content,
      excerpt,
    } = fileData
    return {
      updatedAt,
      publishedAt,
      slug,
      title,
      content,
      tags,
      type,
      excerpt,
      readingTime: readingTime(content),
    }
  })

  return articles
    .filter(article => article.publishedAt || process.env.NODE_ENV === 'development')
    .sort((a, b) => b.updatedAt.localeCompare(a.publishedAt))
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

  if (articleMap.article.excerpt) {
    const excerptSeparator = '---'
    const endOfExcerptIndex = articleMap.article.content.indexOf(excerptSeparator)
    articleMap.article.content = articleMap.article.content.slice(
      endOfExcerptIndex + excerptSeparator.length
    )
  }

  if (index > 0) articleMap.prev = articles[index - 1]
  if (index < articles.length - 1) articleMap.next = articles[index + 1]

  return articleMap
}
