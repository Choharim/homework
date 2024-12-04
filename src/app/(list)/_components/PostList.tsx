'use client'

import usePagination from '@/components/Pagination/usePagination'
import { PostFrontMatter } from '@/entity/post/type'
import CategoryChip from '@/feature/post/_components/CategoryChip'
import CategoryTag from '@/feature/post/_components/CategoryTag'
import PostCard from '@/feature/post/_components/PostCard'
import React from 'react'

import { notFound } from 'next/navigation'

interface Props {
  frontMatters: PostFrontMatter[]
}
function PostList({ frontMatters }: Props) {
  const { Pagination, paginatedPosts } = usePagination({
    posts: frontMatters,
  })

  if (!paginatedPosts.length) {
    notFound()
  }

  return (
    <>
      {paginatedPosts.map((post) => {
        const { id, title, description, create_date, category, tag } = post

        return (
          <PostCard key={id} id={id}>
            <PostCard.Body>
              <PostCard.Title>{title}</PostCard.Title>
              <PostCard.Desc>{description}</PostCard.Desc>
            </PostCard.Body>

            <PostCard.Footer>
              <PostCard.LabelSection>
                <CategoryChip size="s">{category}</CategoryChip>
                {tag.map((t, i) => (
                  <CategoryTag size="s" key={`${t}-${i}`}>
                    {t}
                  </CategoryTag>
                ))}
              </PostCard.LabelSection>
              <PostCard.Date dateTime={create_date} />
            </PostCard.Footer>
          </PostCard>
        )
      })}

      <Pagination />
    </>
  )
}

export default PostList
