import { loadArticles } from 'utils/contents/articles'

export function loadTags() {
  return loadArticles()
    .map(post => post.tags)
    .flat()
    .filter((tag, index, tags) => tags.indexOf(tag) == index)
}

export function loadTagArticles(tag: string) {
  return loadArticles().filter(article => article.tags.includes(tag))
}
