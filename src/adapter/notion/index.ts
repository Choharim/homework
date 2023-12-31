import NOTION_ID from './id'
import { Post } from './type'

class NotionAPI {
  private baseURL = 'https://notion-api.splitbee.io/v1'

  public async getPosts(): Promise<Post[]> {
    return await fetch(`${this.baseURL}/table/${NOTION_ID.page.blog}`).then(
      (res) => res.json()
    )
  }
}

const notionAPI = new NotionAPI()

export default notionAPI
