import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { MDX_EXTENSION, POSTS_PATH } from './constant'
import Post from './type'

const MDX_REG_EXP = /\.mdx?$/

const isMDX = (path: string) => MDX_REG_EXP.test(path)

export const getFileSlug = (filePath: string) => {
  if (isMDX(filePath)) {
    return filePath.replace(MDX_REG_EXP, '')
  }

  return filePath
}

export const getFilePath = (slug: string) => {
  if (!isMDX(slug)) {
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

const sortByCreateDate = (posts: Post[]): Post[] => {
  const postsArray = [...posts]

  return postsArray.sort(
    (firstPost, secondPost) =>
      new Date(secondPost.data.createDate).valueOf() -
      new Date(firstPost.data.createDate).valueOf()
  )
}

export const getAllPosts = () => {
  const filePaths = getPostsFilePaths()

  const posts = filePaths.map((filePath) => getPost(filePath))

  return sortByCreateDate(posts)
}
