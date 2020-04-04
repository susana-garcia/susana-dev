export const Routes = {
  home: () => ({
    href: `/`,
  }),
  article: (slug: string) => ({
    href: `/articles/[slug]`,
    as: `/articles/${slug}`,
  }),
  tag: (tag: string) => ({
    href: `/tags/[tag]`,
    as: `/tags/${tag}`,
  }),
}
