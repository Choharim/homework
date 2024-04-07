import { PostCategory, PostFrontMatter } from './type'

class PostEntity {
  public getPublishedPostFrontMatters(posts: PostFrontMatter[]) {
    return posts.filter((post) => post.published)
  }

  public getPostFrontMattersSortedByNewest(posts: PostFrontMatter[]) {
    const copiedPosts = [...posts]

    copiedPosts.sort((a, b) => {
      return Date.parse(b.create_date) - Date.parse(a.create_date)
    })

    return copiedPosts
  }

  public getPostIDs(posts: PostFrontMatter[]) {
    return posts.map((post) => post.id)
  }

  public getPostFrontMatter({
    posts,
    id,
  }: {
    posts: PostFrontMatter[]
    id: string
  }): PostFrontMatter | undefined {
    return posts.find((post) => post.id === id)
  }

  public getPostFrontMattersByCategory({
    posts,
    category,
  }: {
    posts: PostFrontMatter[]
    category: PostCategory
  }) {
    return posts.filter((post) => post.category === category)
  }
}

const postEntity = new PostEntity()

export default postEntity
