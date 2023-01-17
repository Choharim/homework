import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { MDX_EXTENSION, POSTS_PATH } from './constant'
import Post, { Category } from './type'

const MDX_REG_EXP = /\.mdx?$/

const isMDX = (path: string) => MDX_REG_EXP.test(path)

/**
 * @description 확장자를 제외한 파일명을 리턴합니다.
 */
export const getFileTitle = (filename: string) => {
  if (isMDX(filename)) {
    return filename.replace(MDX_REG_EXP, '')
  }

  return filename
}

/**
 * @description 확장자를 포함한 파일명을 리턴합니다.
 */
const getFilename = (fileTitle: string) => {
  if (!isMDX(fileTitle)) {
    return `${fileTitle}.${MDX_EXTENSION}`
  }

  return fileTitle
}

export const getFileTitleOfPosts = (category: Category = 'all') => {
  let fileTitleOfPosts: string[] = []

  if (category === 'all') {
    const categories = fs.readdirSync(POSTS_PATH, 'utf-8')

    categories.forEach((v) => {
      fileTitleOfPosts = [
        ...fileTitleOfPosts,
        ...fs.readdirSync(join(POSTS_PATH, v), 'utf-8'),
      ]
    })
  } else {
    fileTitleOfPosts = fs.readdirSync(join(POSTS_PATH, category), 'utf-8')
  }

  return fileTitleOfPosts.filter((path) => isMDX(path))
}

export const getPost = (params: {
  fileTitle: string
  category: Category
}): Post => {
  const { fileTitle, category } = params

  const filePath = getFilename(fileTitle)
  const directory = category === 'all' ? getCategoryOfFile(fileTitle) : category
  const fullPath = join(POSTS_PATH, directory, filePath)

  const markdown = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(markdown)

  return { slug: getFileTitle(fileTitle), data: data as Post['data'], content }
}

const sortByCreateDate = (posts: Post[]): Post[] => {
  const postsArray = [...posts]

  return postsArray.sort(
    (firstPost, secondPost) =>
      new Date(secondPost.data.createDate).valueOf() -
      new Date(firstPost.data.createDate).valueOf()
  )
}

export const getPosts = (category: Category = 'all') => {
  const fileTitleOfPosts = getFileTitleOfPosts(category)

  const posts = fileTitleOfPosts.map((title) =>
    getPost({ fileTitle: title, category })
  )

  return sortByCreateDate(posts)
}

export const getCategoryOfFile = (fileTitle: string) => {
  const categories = fs.readdirSync(POSTS_PATH, 'utf-8')
  let category: Category = 'all'
  let filenames: string[]

  for (let i = 0; i < categories.length; i++) {
    filenames = fs.readdirSync(join(POSTS_PATH, categories[i]), 'utf-8')
    for (let j = 0; j < filenames.length; j++) {
      if (filenames[j] === getFilename(fileTitle)) {
        category = categories[i] as Category
        return category
      }
    }
  }

  return category
}
