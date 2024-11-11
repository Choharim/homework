import Head from 'next/head'
import React, { MetaHTMLAttributes, useMemo } from 'react'

import { BLOG, EN_NAME } from '@/feature/app/constants/owner'
import { usePathname } from 'next/navigation'
import { getURLRemovedQuery } from '@/shared/utils/url'

type MetaField = 'title' | 'description' | 'image' | 'ogType'

export type MetaHeadProps = Partial<
  Record<MetaField, MetaHTMLAttributes<HTMLMetaElement>['content']>
>

const MetaHead = ({ title, description, image, ogType }: MetaHeadProps) => {
  const pathname = usePathname()

  const metaData = useMemo(
    () => ({
      ogType: ogType ?? 'website',
      siteName: `${BLOG.shortName}의 개발 블로그`,
      author: `${EN_NAME.first} ${EN_NAME.last}`,
      title: `${title ?? BLOG.fullName} | ${BLOG.shortName}의 개발 블로그`,
      url: `${BLOG.domain}${getURLRemovedQuery(pathname) ?? ''}`,
    }),
    [ogType, title, pathname]
  )

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="robots" content="index, follow" />
      <meta property="og:type" content={metaData.ogType} />
      <meta property="og:site_name" content={metaData.siteName} />
      <meta name="author" content={metaData.author} />

      <title>{metaData.title}</title>
      <meta property="og:title" content={metaData.title} />
      <meta name="twitter:title" content={metaData.title} />

      {!!description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {!!image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}

      <meta property="og:url" content={metaData.url} />
      <link rel="canonical" href={metaData.url} />

      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
      />
    </Head>
  )
}

export default MetaHead
