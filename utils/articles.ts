import { loadFiles } from './fileLoader'

export type Article = {
  slug: string
  title: string
  date: string
  tags: string[]
  content: string
  excerpt: string
}

export function loadArticles(): Article[] {
  const articleFiles = loadFiles('articles')

  const articles = articleFiles.map(fileData => {
    const {
      data: { slug, title, date, tags },
      content,
      excerpt,
    } = fileData
    return { slug, title, date, content, tags, excerpt }
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
