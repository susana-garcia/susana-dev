import { loadContents } from 'utils/contents'

export type Tag = string

export function loadTags() {
  const tags: Tag[] = loadContents()
    .map(post => post.tags)
    .flat()
    .filter((tag, index, tags) => tags.indexOf(tag) == index)
  return tags
}

export function loadContentsForTag(tag: string) {
  return loadContents().filter(({ tags }) => tags.includes(tag))
}
