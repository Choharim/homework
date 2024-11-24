// app/sitemap.ts
import notionAPI from '@/adapter/notion'
import AppFeature from '@/feature/application'

import { MetadataRoute } from 'next'

// https://rootinmeaningful.vercel.app/sitemap.xml 에서 확인
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${AppFeature.URL.domain}`,
      lastModified: new Date().toISOString(),
    },
  ]

  const dynamicRoutes: MetadataRoute.Sitemap = []

  const [categoryListResult, postResult] = await Promise.allSettled([
    notionAPI.getCategories(),
    notionAPI.getPublishedPostFrontMatters(),
  ])

  if (categoryListResult.status === 'fulfilled') {
    dynamicRoutes.push(
      ...categoryListResult.value.map((category) => ({
        url: `${AppFeature.URL.domain}/category/${category}`,
        lastModified: new Date().toISOString(),
      }))
    )
  }

  if (postResult.status === 'fulfilled') {
    dynamicRoutes.push(
      ...postResult.value.map((post) => ({
        url: `${AppFeature.URL.domain}/blog/${post.id}`,
        lastModified: new Date().toISOString(),
      }))
    )
  }

  return [...staticRoutes, ...dynamicRoutes]
}
