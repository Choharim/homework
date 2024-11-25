import { PostFrontMatter } from '@/entity/post/type'
import AppFeature from '../application'
import { BlogPosting, CollectionPage, WithContext } from 'schema-dts'
import PostFeature from '../post'

type GetBlogPostingParams = {
  title: PostFrontMatter['title']
  desc: PostFrontMatter['description']
  category: PostFrontMatter['category']
  datePublished: PostFrontMatter['create_date']
  id: PostFrontMatter['id']
}

class SEOFeature {
  public static readonly METADATA = {
    title: `${AppFeature.BLOG_NAME.fullName} 기술 블로그, ${AppFeature.BLOG_NAME.shortName} 테크`,
    keword: [
      '블로그',
      'Blog',
      '기술 블로그',
      'Tech Blog',
      '프론트엔드',
      'Frontend',
      '개발',
      'Development',
      '웹 개발',
      'Web Development',
      'Javascript',
      'js',
      '자바스크립트',
      'Typescript',
      'ts',
      '타입스크립트',
    ],
  }

  private static getBlogPosting = ({
    title,
    desc,
    category,
    datePublished,
    id,
  }: GetBlogPostingParams): BlogPosting => {
    return {
      author: {
        '@type': 'Person',
        name: AppFeature.AUTHOR_NAME.ko,
        url: AppFeature.URL.github,
      },
      publisher: {
        '@type': 'Person',
        name: AppFeature.AUTHOR_NAME.ko,
      },
      url: `${AppFeature.URL.domain}${AppFeature.getAppURI({
        name: 'blogDetails',
        pathParams: { id: id },
      })}`,

      '@type': 'BlogPosting',
      headline: title,
      name: title,
      description: desc,
      articleSection: [category, PostFeature.getCategoryName(category)],
      keywords: [...SEOFeature.METADATA.keword, category].join(','),
      dateModified: new Date().toISOString(),
      datePublished: new Date(datePublished).toISOString(),

      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${AppFeature.URL.domain}${AppFeature.getAppURI({
          name: 'blogDetails',
          pathParams: { id: id },
        })}`,
      },
    }
  }

  /**
   * @link {https://developers.google.com/search/docs/appearance/structured-data/article?hl=ko}
   */
  public static getBlogPostingContext = ({
    title,
    desc,
    category,
    datePublished,
    id,
  }: GetBlogPostingParams): WithContext<BlogPosting> => {
    return {
      '@context': 'https://schema.org',
      ...this.getBlogPosting({
        title,
        desc,
        category,
        datePublished,
        id,
      }),
    }
  }

  public static getCollectionPageContext = ({
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
        category ? PostFeature.getCategoryName(category) : '프론트엔드'
      } 개발에 관한 블로그 글 모음.`,
      url: url,
      mainEntity: frontMatters.map((data) =>
        this.getBlogPosting({
          title: data.title,
          desc: data.description,
          category: data.category,
          datePublished: data.create_date,
          id: data.id,
        })
      ),
    }
  }
}

export default SEOFeature
