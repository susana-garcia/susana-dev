import { loadContents, Content } from 'utils/contents'

export type Article = Content

export interface ArticleMap {
  article: Article
  next?: Article
  prev?: Article
}

export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export function loadArticles() {
  const articles: Article[] = loadContents('article')
  return articles
}

export function loadArticle(slug: string) {
  const articles = loadArticles()

  const index = articles.findIndex(article => article.slug == slug)

  const articleMap: ArticleMap = {
    article: articles[index],
  }

  if (index > 0) articleMap.prev = articles[index - 1]
  if (index < articles.length - 1) articleMap.next = articles[index + 1]

  return articleMap
}
