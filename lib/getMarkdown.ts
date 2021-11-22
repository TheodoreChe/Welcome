import { readFileSync } from 'fs'
import { resolve, join } from 'path'
import matter from 'gray-matter'
import paths from '../paths'

export function getMarkdown(path: string): matter.GrayMatterFile<string> {
  const fullPath = join(paths.root, path)
  const fileContents = readFileSync(fullPath, 'utf8')
  return matter(fileContents)
}
