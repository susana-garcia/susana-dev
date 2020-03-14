import { loadArticles } from './articles'

export function loadTags() {
  return loadArticles()
    .map(post => post.tags)
    .flat()
    .filter((tag, index, tags) => tags.indexOf(tag) == index)
}

export function loadTagArticles(tag: string) {
  return loadArticles().filter(post => post.tags.includes(tag))
}
