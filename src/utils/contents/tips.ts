import { loadContents, Content } from 'utils/contents'

export type Tip = Content

export interface TipMap {
  tip: Tip
  next?: Tip
  prev?: Tip
}

export function loadTips() {
  const tips: Tip[] = loadContents('tip')
  return tips
}

export function loadTip(slug: string) {
  const tips = loadTips()

  const index = tips.findIndex(tip => tip.slug == slug)

  const tipMap: TipMap = {
    tip: tips[index],
  }

  if (index > 0) tipMap.prev = tips[index - 1]
  if (index < tips.length - 1) tipMap.next = tips[index + 1]

  return tipMap
}
