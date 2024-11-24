'use client'

import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Outlink from '@/feature/post/_components/PostTemplate/Outlink'

const Code = dynamic(
  () => import('@/feature/post/_components/PostTemplate/Code'),
  { ssr: false }
)

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: any
}
function Renderer({ post }: Props) {
  return (
    <NotionRenderer
      recordMap={post}
      showTableOfContents={false}
      components={{
        Code: Code,
        nextImage: Image,
        Link: Outlink,
        nextLink: Link,
        Collection: () => <></>,
        Equation: () => <></>,
      }}
    />
  )
}

export default Renderer
