import { NotionAPI as NotionClient } from 'notion-client'

import NOTION_ID from './id'
import { PostCategory, PostFrontMatter } from './type'

class NotionAPI {
  private baseURL = 'https://notion-api.splitbee.io/v1'

  public async getPosts(): Promise<PostFrontMatter[]> {
    return await fetch(`${this.baseURL}/table/${NOTION_ID.page.blog}`).then(
      (res) => res.json()
    )
  }

  public async getPostIDs(): Promise<PostFrontMatter['id'][]> {
    const posts = await this.getPosts()

    return posts.map((post) => post.id)
  }

  public async getPostFrontMatter(
    id: string
  ): Promise<PostFrontMatter | undefined> {
    const posts = await this.getPosts()

    return posts.find((post) => post.id === id)
  }

  public async getPost(id: string) {
    return await notionClient.getPage(id)
  }

  public async getFilters() {
    const tableOfPosts = await notionClient.getPage(NOTION_ID.page.blog)
    const filterCodes: string[] =
      Object.values(
        tableOfPosts.collection_view
      )[0]?.value?.format?.property_filters?.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (filterInfo: any) => filterInfo.filter.property
      ) || []

    const schema = Object.values(tableOfPosts.collection)[0]?.value?.schema

    let filters: Record<string, string[]> = {}

    filterCodes.forEach((code) => {
      const key = schema?.[code].name
      const values = schema?.[code].options?.map((option) => option.value) || []

      if (!key) return

      filters = {
        ...filters,
        [key]: values,
      }
    })

    return filters
  }

  public async getCategories(): Promise<PostCategory[]> {
    const filtes = await this.getFilters()

    return (filtes['category'] as PostCategory[]) || []
  }
}

const notionClient = new NotionClient()

const notionAPI = new NotionAPI()

export default notionAPI
