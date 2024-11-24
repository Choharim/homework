import { PostCategory, PostTag } from '@/entity/post/type'

class PostFeature {
  private static readonly CATEGORY_NAME: Record<PostCategory, string> = {
    algorithms: '알고리즘',
    'data-structure': '자료구조',
    frontend: '프론트엔드',
    javascript: '자바스크립트',
    typescript: '타입스크립트',
    network: '네트워크',
    'operating-system': '운영체제',
    webview: '웹뷰',
  }

  public static getCategoryName(category: PostCategory) {
    return this.CATEGORY_NAME[category] ?? ''
  }

  private static readonly TAG_NAME: Record<PostTag, string> = {
    theory: '이론',
    'problem-solving': '문제풀이',
    'trouble-shooting': '이슈해결',
    thinking: '생각',
  }

  public static getTagName(tag: PostTag) {
    return this.TAG_NAME[tag] ?? ''
  }
}

export default PostFeature
