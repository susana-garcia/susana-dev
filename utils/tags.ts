import { loadPosts } from './posts'

export function loadTags() {
  return loadPosts()
    .map(post => post.tags)
    .flat()
    .filter((tag, index, tags) => tags.indexOf(tag) == index)
}

export function loadTagPosts(tag: string) {
  return loadPosts().filter(post => post.tags.includes(tag))
}
