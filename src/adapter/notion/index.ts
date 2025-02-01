import PostEntity from '@/entity/post'
import { PostCategory, PostFrontMatter } from '@/entity/post/type'
import { NotionAPI as NotionClient } from 'notion-client'

const notionClient = new NotionClient()

class NotionAPI {
  private NOTION_ID = {
    page: {
      blog: '51e8461a3f77425aac9bf1d8ccac7720',
    },
  } as const

  private BASE_URL = 'https://notion-api.splitbee.io/v1'

  private async getPostFrontMatters(): Promise<PostFrontMatter[]> {
    return await fetch(`${this.BASE_URL}/table/${this.NOTION_ID.page.blog}`, {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    }).then((res) => res.json())
  }
  public async getPublishedPostFrontMatters(): Promise<PostFrontMatter[]> {
    const all = await this.getPostFrontMatters()

    return PostEntity.filterPublishedFrontMatters(all)
  }

  public async getRecommandPostFrontMatters(): Promise<PostFrontMatter[]> {
    const all = await this.getPostFrontMatters()

    return PostEntity.filterRecommandFrontMatters(all)
  }

  public async getPost(id: string) {
    return await notionClient.getPage(id)
  }

  public async getTable() {
    return await notionClient.getPage(this.NOTION_ID.page.blog)
  }

  public async getFilters() {
    const tableOfPosts = await this.getTable()
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

    return filters as { category: PostCategory[] }
  }

  public async getCategories(): Promise<PostCategory[]> {
    const filtes = await this.getFilters()

    return filtes['category'] || []
  }
}

const notionAPI = new NotionAPI()

export default notionAPI
