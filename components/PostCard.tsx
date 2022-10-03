import { POST_DIRECTORY } from 'entity/post/constant'
import Post from 'entity/post/type'
import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'

import TagChip from './TagChip'
import Thumbnail from './Thumbnail'

const THUMBNAIL_HEIGHT = 160

const PostCard = (props: Pick<Post, 'data' | 'slug'>) => {
  const {
    data: { title, description, createDate, tags, thumbnail },
    slug,
  } = props

  return (
    <Link
      href={`/${POST_DIRECTORY}/[slug]`}
      as={`/${POST_DIRECTORY}/${slug}`}
      passHref
    >
      <LinkWrapper>
        <Card>
          {thumbnail && (
            <CustomThumbnail
              src={thumbnail}
              layout="fill"
              objectFit="contain"
              height={`${THUMBNAIL_HEIGHT}px`}
              width="300px"
            />
          )}

          <Wrapper hasThumbnail={!!thumbnail}>
            <Content>
              <Header>
                <CreateDate dateTime={createDate}>{createDate}</CreateDate>
                <h3>{title}</h3>
              </Header>
              <Desc>{description}</Desc>
            </Content>

            {!!tags?.length && (
              <ChipContainer>
                {tags.map((tag, i) => (
                  <TagChip key={`${tag}_${i}`} type={tag}>
                    {tag}
                  </TagChip>
                ))}
              </ChipContainer>
            )}
          </Wrapper>
        </Card>
      </LinkWrapper>
    </Link>
  )
}

export default PostCard

const Card = styled.article`
  width: 300px;
  height: 340px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover {
    transform: translateY(-8px);
    transition: transform 0.3s;
  }
`

const CustomThumbnail = styled(Thumbnail)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const LinkWrapper = styled.a`
  width: fit-content;
`

const Wrapper = styled.div<{ hasThumbnail: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${({ hasThumbnail }) =>
    hasThumbnail
      ? css`
          height: calc(100% - ${THUMBNAIL_HEIGHT}px);
        `
      : css`
          height: calc(100%);
        `};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Header = styled.div`
  display: grid;
  gap: 4px;
`

const Desc = styled.p`
  margin: 10px 0;
`

const CreateDate = styled.time`
  ${({ theme }) => theme.font.body_3};
  color: ${({ theme }) => theme.color.gray};
`
const ChipContainer = styled.div`
  display: flex;
  align-self: flex-end;
`
