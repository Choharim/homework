import Post from 'entity/post/type'
import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'
import TagChip from './TagChip'
import Thumbnail from './Thumbnail'

const PostCard = (props: Pick<Post, 'data' | 'slug'>) => {
  const {
    data: { title, description, createAt, tags, thumbnail },
    slug,
  } = props

  return (
    <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
      <a>
        <Card>
          {thumbnail && <Thumbnail src={thumbnail} />}

          <Wrapper fitHeight={!!thumbnail}>
            <Content>
              <Header>
                <h3>{title}</h3>
                <CreatedTime dateTime={createAt}>{createAt}</CreatedTime>
              </Header>
              <Desc>{description}</Desc>
            </Content>

            <ChipContainer>
              {tags?.map((tag, i) => (
                <TagChip key={`${tag}_${i}`} type={tag}>
                  {tag}
                </TagChip>
              ))}
            </ChipContainer>
          </Wrapper>
        </Card>
      </a>
    </Link>
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
const Wrapper = styled.div<{ fitHeight: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${({ fitHeight }) =>
    !fitHeight &&
    css`
      height: 100%;
    `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`

const Desc = styled.p`
  margin: 10px 0;
`

const CreatedTime = styled.time`
  color: ${({ theme }) => theme.color.gray};
`
const ChipContainer = styled.div`
  display: flex;
  align-self: flex-end;
`
