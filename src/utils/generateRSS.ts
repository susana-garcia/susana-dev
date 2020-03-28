import fs from 'fs'
import RSS from 'rss'
import { loadTags } from 'utils/tags'
import { Article } from './articles'

const RSS_PATH = 'public/rss.xml'

export function generateRSS(articles: Article[]) {
  const tags = loadTags()
  const year = new Date().getFullYear()

  const feed = new RSS({
    title: 'My blog',
    description: 'All about code and design.',
    managingEditor: 'Lailo',
    webMaster: 'Lailo',
    copyright: `${year} Lailo`,
    language: 'en',
    categories: tags,
    // eslint-disable-next-line @typescript-eslint/camelcase
    feed_url: `${process.env.SITE_URL}/rss.xml`,
    // eslint-disable-next-line @typescript-eslint/camelcase
    site_url: process.env.SITE_URL,
  })

  articles.forEach(article => {
    feed.item({
      title: article.title,
      description: article.excerpt,
      url: `${process.env.SITE_URL}/posts/${article.slug}`,
      guid: article.slug,
      categories: article.tags,
      author: 'Lailo',
      date: article.date,
    })
  })

  const rssXML = feed.xml({ indent: true })

  fs.writeFileSync(RSS_PATH, rssXML)
}
