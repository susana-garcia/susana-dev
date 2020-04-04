import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import slugify from 'slugify'
import readingTime from 'reading-time'

export type ContentType = 'article' | 'tip'

export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export interface Content {
  slug: string
  title: string
  description: string
  content: string
  type: ContentType
  tags: string[]
  publishedAt: string
  updatedAt: string
  readingTime?: ReadingTime
}

export function loadContents(type?: ContentType) {
  const contentsFolder = 'articles'
  const contentsPath = path.resolve(process.cwd(), contentsFolder)
  const contentsFiles = fs.readdirSync(contentsPath)

  const files = contentsFiles
    .map(fileName => {
      const filePath = path.join(contentsPath, fileName)
      const fileData = matter(fs.readFileSync(filePath, 'utf8'))

      const {
        data: { title, description, tags, publishedAt, updatedAt, type },
        content,
      } = fileData

      const contentFile: Content = {
        slug: slugify(title, { lower: true }),
        title,
        description,
        content,
        type,
        tags,
        publishedAt,
        updatedAt,
        readingTime: readingTime(content),
      }

      return contentFile
    })
    .filter(article => article.publishedAt || process.env.NODE_ENV === 'development')

  if (type) {
    return files.filter(file => file.type === type)
  }

  return files
}
