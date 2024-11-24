'use client'

import usePagination from '@/components/Pagination/usePagination'
import { PostFrontMatter } from '@/entity/post/type'
import AppFeature from '@/feature/application'
import CategoryChip from '@/feature/post/components/CategoryChip'
import CategoryTag from '@/feature/post/components/CategoryTag'
import PostCard from '@/feature/post/components/PostCard'
import Link from 'next/link'
import React from 'react'

import * as style from 'src/feature/post/components/style/cardListFrame.css'

interface Props {
  frontMatters: PostFrontMatter[]
}
function PostList({ frontMatters }: Props) {
  const { Pagination, paginatedPosts } = usePagination({
    posts: frontMatters,
  })

  return (
    <>
      {paginatedPosts.map((post) => {
        const { id, title, description, create_date, category, tag } = post

        return (
          <PostCard key={id}>
            <Link
              className={style.link}
              href={AppFeature.getAppURI({
                name: 'blogDetails',
                pathParams: { id },
              })}
            >
              <PostCard.Date dateTime={create_date} />

              <PostCard.Content>
                <PostCard.Title>{title}</PostCard.Title>
                <PostCard.Desc>{description}</PostCard.Desc>
              </PostCard.Content>
            </Link>

            <PostCard.LabelSection>
              <CategoryChip size="s">{category}</CategoryChip>
              {tag.map((t, i) => (
                <CategoryTag size="s" key={`${t}-${i}`}>
                  {t}
                </CategoryTag>
              ))}
            </PostCard.LabelSection>
          </PostCard>
        )
      })}

      <Pagination />
    </>
  )
}

export default PostList
