import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function loadFiles(dir: string) {
  const filesPath = path.resolve(process.cwd(), 'content', dir)
  const files = fs.readdirSync(filesPath)

  return files.map(fileName => {
    const filePath = path.join(filesPath, fileName)
    const fileData = fs.readFileSync(filePath, 'utf8')
    return matter(fileData)
  })
}
