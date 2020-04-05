import fs from 'fs'
import RSS from 'rss'
import marked from 'marked'
import hljs from 'highlight.js'
import { loadTags } from 'utils/contents/tags'
import { Content } from './contents'
import linkForContentType from 'utils/linkForContentType'

const RSS_PATH = 'public/rss.xml'

export function generateRSS(contents: Content[]) {
  const tags = loadTags()
  const year = new Date().getFullYear()

  const feed = new RSS({
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    managingEditor: process.env.AUTHORS_NAME,
    webMaster: process.env.AUTHORS_NAME,
    copyright: `${year} ${process.env.AUTHORS_NAME}`,
    language: process.env.SITE_LOCALE,
    categories: tags,
    // eslint-disable-next-line @typescript-eslint/camelcase
    feed_url: `${process.env.SITE_URL}/rss.xml`,
    // eslint-disable-next-line @typescript-eslint/camelcase
    site_url: process.env.SITE_URL,
  })

  contents.forEach(item => {
    feed.item({
      title: item.title,
      description: marked(item.content, {
        highlight: (code, lang) => hljs.highlight(lang, code).value,
      }),
      url: `${process.env.SITE_URL}${linkForContentType(item.type, item.slug)}`,
      guid: item.slug,
      categories: item.tags,
      author: process.env.SITE_LOCALE,
      date: item.publishedAt,
    })
  })

  const rssXML = feed.xml({ indent: true })

  fs.writeFileSync(RSS_PATH, rssXML)
}
