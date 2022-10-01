import Post from 'entity/post/type'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import TagChip from './TagChip'
import Thumbnail from './Thumbnail'

const PostCard = (props: Pick<Post, 'data' | 'slug'>) => {
  const {
    data: { title, description, createAt, tags, thumbnail },
    slug,
  } = props

  return (
    <Card>
      <Link href={'/posts/[slug]'} as={`/posts/${slug}`} passHref>
        <a>
          {thumbnail && <Thumbnail src={thumbnail} />}
          <TextContent>
            <Header>
              <h3>{title}</h3>
              <CreatedTime dateTime={createAt}>{createAt}</CreatedTime>
            </Header>
            <section>
              <p>{description}</p>
            </section>
            {tags?.map((tag, i) => (
              <TagChip key={`${tag}_${i}`} type={tag}>
                {tag}
              </TagChip>
            ))}
          </TextContent>
        </a>
      </Link>
    </Card>
  )
}

export default PostCard

const Card = styled.article`
  width: 100%;
  max-width: 300px;
  height: 340px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
`

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`

const CreatedTime = styled.time`
  color: ${({ theme }) => theme.color.gray};
`
