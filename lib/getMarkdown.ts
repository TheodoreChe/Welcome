import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getMarkdown(path: string): matter.GrayMatterFile<string> {
  const fullPath = join(process.cwd(), path)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return matter(fileContents)
}
