import { PostFrontMatter } from '@/entity/post/type'
import CategoryChip from '@/feature/post/_components/CategoryChip'
import CategoryTag from '@/feature/post/_components/CategoryTag'
import React from 'react'
import PostCard from './PostCard'

interface Props {
  frontMatters: PostFrontMatter[]
}
function PostList({ frontMatters }: Props) {
  return (
    <>
      {frontMatters.map((post) => {
        const { id, title, description, category, tag } = post

        return (
          <PostCard key={id} id={id}>
            <PostCard.Body>
              <PostCard.Title>{title}</PostCard.Title>
              <PostCard.Desc>{description}</PostCard.Desc>
            </PostCard.Body>

            <PostCard.Footer>
              <PostCard.LabelSection>
                <CategoryChip size="m" variety="soft">
                  {category}
                </CategoryChip>
                {tag.map((t, i) => (
                  <CategoryTag size="m" key={`${t}-${i}`}>
                    {t}
                  </CategoryTag>
                ))}
              </PostCard.LabelSection>
            </PostCard.Footer>
          </PostCard>
        )
      })}
    </>
  )
}

export default PostList
