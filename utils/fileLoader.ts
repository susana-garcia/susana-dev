import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function loadFiles(dir: string) {
  const filesPath = path.resolve(process.cwd(), dir)
  const files = fs.readdirSync(filesPath)

  return files.map(fileName => {
    const filePath = path.join(filesPath, fileName)
    const fileData = fs.readFileSync(filePath, 'utf8')
    return matter(fileData, { excerpt: true })
  })
}
