export const Routes = {
  home: () => ({
    href: `/`,
    as: `/`,
  }),
  article: (slug: string) => ({
    href: `/articles/[slug]`,
    as: `/articles/${slug}`,
  }),
  tip: (slug: string) => ({
    href: `/tips/[slug]`,
    as: `/tips/${slug}`,
  }),
  tag: (tag: string) => ({
    href: `/tags/[tag]`,
    as: `/tags/${tag}`,
  }),
}
