import { deviceSize } from 'constants/common'
import { FrontMatter } from 'entity/post/type'
import React from 'react'
import styled from 'styled-components'
import TagChip from './TagChip'
import Thumbnail from './Thumbnail'

type Props = {
  children: React.ReactNode
  data: FrontMatter
}
const PostTemplate = ({ data, children }: Props) => {
  const { title, createAt, tags, thumbnail } = data

  return (
    <Article>
      <Header>
        <Wrapper>
          <Title>{title}</Title>
          <ChipContainer>
            {tags?.map((tag, i) => (
              <TagChip key={`${tag}_${i}`} type={tag}>
                {tag}
              </TagChip>
            ))}
          </ChipContainer>
        </Wrapper>
        <CreatedTime dateTime={createAt}>{createAt}</CreatedTime>
        {thumbnail && (
          <Thumbnail
            src={thumbnail}
            layout="responsive"
            width={`${deviceSize.pc}px`}
            height="300px"
            objectFit="contain"
          />
        )}
      </Header>

      {children}
    </Article>
  )
}

export default PostTemplate

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`

const Header = styled.div`
  display: grid;
  gap: 10px;
  margin: 20px 0 30px;
`
const Title = styled.h1`
  ${({ theme }) => theme.font.header_1};
  color: ${({ theme }) => theme.color.lightBlack};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const CreatedTime = styled.time`
  ${({ theme }) => theme.font.subtitle_2};
  color: ${({ theme }) => theme.color.gray};
`

const ChipContainer = styled.div`
  display: flex;
  margin-left: 12px;

  & div {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`
