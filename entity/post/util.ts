import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { isMDX, MDX_REG_EXP } from 'utils/regExp'
import { MDX_EXTENSION, POSTS_PATH } from './constant'
import Post from './type'

export const getFileSlug = (filePath: string) => {
  if (filePath.endsWith(MDX_EXTENSION)) {
    return filePath.replace(MDX_REG_EXP, '')
  }

  return filePath.split('.')[0]
}

export const getFilePath = (slug: string) => {
  if (!slug.endsWith(MDX_EXTENSION)) {
    return `${slug}.${MDX_EXTENSION}`
  }

  return slug
}

export const getPostsFilePaths = () => {
  const pathsInPosts = fs.readdirSync(POSTS_PATH)
  const mdxPosts = pathsInPosts.filter((path) => isMDX(path))

  return mdxPosts
}

export const getPost = (slug: string): Post => {
  const filePath = getFilePath(slug)
  const fullPath = join(POSTS_PATH, filePath)
  const markdown = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(markdown)

  return { slug: getFileSlug(slug), data: data as Post['data'], content }
}

export const getAllPosts = () => {
  const filePaths = getPostsFilePaths()

  const posts = filePaths.map((filePath) => getPost(filePath))

  return posts
}

export const getAllPostSlugs = () => {
  const filePaths = getPostsFilePaths()

  const slugs = filePaths.map((filePath) => ({ slug: getFileSlug(filePath) }))

  return slugs
}
