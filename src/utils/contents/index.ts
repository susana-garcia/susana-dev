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
  const articles = loadedContentOfType('article')
  const tips = loadedContentOfType('tip')
  const contentsFiles = [...articles, ...tips]

  const files = contentsFiles
    .map(fileData => {
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

function loadedContentOfType(type: ContentType) {
  const contentsPath = path.resolve(process.cwd(), 'contents', type)
  const contentsFiles = fs.readdirSync(contentsPath)
  return contentsFiles.map(fileName => {
    const filePath = path.join(contentsPath, fileName)
    return matter(fs.readFileSync(filePath, 'utf8'))
  })
}
