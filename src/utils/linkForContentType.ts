import { Routes } from 'utils/routes'
import { ContentType } from 'utils/contents'

export default function(
  type: ContentType,
  slug: string
): {
  href: string
  as: string
} {
  switch (type) {
    case 'article':
      return Routes.article(slug)
    case 'tip':
      return Routes.tip(slug)
    case 'project':
      return Routes.project(slug)
    default:
      return Routes.home()
  }
}
