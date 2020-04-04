import { loadContents } from 'utils/contents'

export type Tip = string

export function loadTags() {
  const tips: Tip[] = loadContents()
    .map(post => post.tags)
    .flat()
    .filter((tag, index, tags) => tags.indexOf(tag) == index)
  return tips
}

export function loadContentsForTag(tag: string) {
  return loadContents().filter(({ tags }) => tags.includes(tag))
}
