import { PostFrontMatter } from '@/entity/post/type'
import AppFeature from '@/feature/application'
import {
  AUTHOR_NAME,
  BLOG,
  GITHUB_URL,
} from '@/feature/application/constants/owner'
import { BlogPosting, CollectionPage, WithContext } from 'schema-dts'
import { METADATA } from './metadata'
import postFeature from '@/feature/post'

type GetBlogPostingParams = {
  title: PostFrontMatter['title']
  desc: PostFrontMatter['description']
  category: PostFrontMatter['category']
  datePublished: PostFrontMatter['create_date']
  id: PostFrontMatter['id']
}
const getBlogPosting = ({
  title,
  desc,
  category,
  datePublished,
  id,
}: GetBlogPostingParams): BlogPosting => {
  return {
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME.en,
      url: GITHUB_URL,
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME.en,
    },
    url: `${BLOG.domain}${AppFeature.getAppURI({
      name: 'blogDetails',
      pathParams: { id: id },
    })}`,

    '@type': 'BlogPosting',
    headline: title,
    name: title,
    description: desc,
    articleSection: [category, postFeature.getCategoryName(category)],
    keywords: [...METADATA.keword, category].join(','),
    dateModified: new Date().toISOString(),
    datePublished: new Date(datePublished).toISOString(),

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BLOG.domain}${AppFeature.getAppURI({
        name: 'blogDetails',
        pathParams: { id: id },
      })}`,
    },
  }
}

/**
 * @link {https://developers.google.com/search/docs/appearance/structured-data/article?hl=ko}
 */
export const getBlogPostingContext = ({
  title,
  desc,
  category,
  datePublished,
  id,
}: GetBlogPostingParams): WithContext<BlogPosting> => {
  return {
    '@context': 'https://schema.org',
    ...getBlogPosting({
      title,
      desc,
      category,
      datePublished,
      id,
    }),
  }
}

export const getCollectionPageContext = ({
  category,
  frontMatters,
  url,
}: {
  category?: PostFrontMatter['category']
  url: string
  frontMatters: PostFrontMatter[]
}): WithContext<CollectionPage> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category,
    description: `${
      category ? postFeature.getCategoryName(category) : '프론트엔드'
    } 개발에 관한 블로그 글 모음.`,
    url: url,
    mainEntity: frontMatters.map((data) =>
      getBlogPosting({
        title: data.title,
        desc: data.description,
        category: data.category,
        datePublished: data.create_date,
        id: data.id,
      })
    ),
  }
}
