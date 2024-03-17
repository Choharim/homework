import { PostCategory, PostFrontMatter, PostTag } from '@/adapter/notion/type'

class PostFeature {
  private POST_CATEGORY_NAME: Record<PostCategory, string> = {
    network: '네트워크',
    'data-structure': '자료구조',
    algorithms: '알고리즘',
    'operating-system': '운영체제',
    typescript: '타입스크립트',
    javascript: '자바스크립트',
    webview: '웹뷰',
    frontend: '프론트엔드',
  }
  public getCategoryName(category: PostCategory) {
    return this.POST_CATEGORY_NAME[category] ?? ''
  }

  private POST_TAG_NAME: Record<PostTag, string> = {
    theory: '이론',
    'problem-solving': '문제해결',
    'trouble-shooting': '이슈해결',
    thinking: '생각',
  }
  public getTagName(tag: PostTag) {
    return this.POST_TAG_NAME[tag] ?? ''
  }

  public getIsPublished(post: PostFrontMatter) {
    return !!post.published
  }

  public getPublishedPosts(posts: PostFrontMatter[]) {
    return posts.filter((post) => this.getIsPublished(post))
  }

  public getPostsSortedByNewest(posts: PostFrontMatter[]) {
    const copiedPosts = [...posts]

    copiedPosts.sort((a, b) => {
      return Date.parse(b.create_date) - Date.parse(a.create_date)
    })

    return copiedPosts
  }
}

const postFeature = new PostFeature()

export default postFeature
