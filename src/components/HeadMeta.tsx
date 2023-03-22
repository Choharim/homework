import Head from 'next/head'
import React, { MetaHTMLAttributes } from 'react'

import { BLOG_NAME, EN_NAME } from '@/domain/owner/constant'

export type HeadMetaProps = {
  title?: MetaHTMLAttributes<HTMLMetaElement>['content']
  description?: MetaHTMLAttributes<HTMLMetaElement>['content']
}

const HeadMeta = ({
  title = BLOG_NAME.fullName,
  description = `${EN_NAME.first} tech blog`,
}: HeadMetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`${title} | ${BLOG_NAME.shortName}`}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} key="desc" />
      <meta property="og:description" content={description} />

      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
      />
    </Head>
  )
}

export default HeadMeta
