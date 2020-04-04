export const Routes = {
  home: () => ({
    href: `/`,
    as: `/`,
  }),
  article: (slug: string) => ({
    href: `/articles/[slug]`,
    as: `/articles/${slug}`,
  }),
  articles: () => ({
    href: `/articles`,
    as: `/articles`,
  }),
  tip: (slug: string) => ({
    href: `/tips/[slug]`,
    as: `/tips/${slug}`,
  }),
  tips: () => ({
    href: `/tips`,
    as: `/tips`,
  }),
  tag: (tag: string) => ({
    href: `/tags/[tag]`,
    as: `/tags/${tag}`,
  }),
  tags: () => ({
    href: `/tags`,
    as: `/tags`,
  }),
}
