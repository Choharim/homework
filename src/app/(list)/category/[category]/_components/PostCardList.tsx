'use client'

import React from 'react'
import PostCard from '@/feature/post/components/PostCard'
import CategoryChip from '@/feature/post/components/CategoryChip'
import usePagination from '@/components/Pagination/usePagination'
import AppFeature from '@/feature/application'
import * as style from 'src/feature/post/components/style/cardListFrame.css'
import Link from 'next/link'
import { PostFrontMatter } from '@/entity/post/type'

interface Props {
  frontMatters: PostFrontMatter[]
}
function PostCardList({ frontMatters }: Props) {
  const { Pagination, paginatedPosts } = usePagination({ posts: frontMatters })

  return (
    <>
      {paginatedPosts.map((post) => {
        const { id, title, description, create_date, category, tag } = post

        return (
          <PostCard key={id}>
            <PostCard.LabelSection>
              <CategoryChip size="s">{category}</CategoryChip>
              {tag.map((t, i) => (
                <PostCard.Tag key={`${t}-${i}`}>{t}</PostCard.Tag>
              ))}
            </PostCard.LabelSection>

            <Link
              className={style.link}
              href={AppFeature.getAppURI({
                name: 'blogDetails',
                pathParams: { id },
              })}
            >
              <PostCard.Content>
                <PostCard.Title>{title}</PostCard.Title>
                <PostCard.Desc>{description}</PostCard.Desc>
              </PostCard.Content>
              <PostCard.Date dateTime={create_date} />
            </Link>
          </PostCard>
        )
      })}

      <Pagination />
    </>
  )
}

export default PostCardList
