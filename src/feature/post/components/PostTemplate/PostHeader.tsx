import styled from '@emotion/styled'

import { PostFrontMatter } from '@/adapter/notion/type'

import Typo from '@/components/typo'
import CategoryChip from '../CategoryChip'

type Props = {
  frontMatter: PostFrontMatter
}

const PostHeader = ({ frontMatter }: Props) => {
  const { title, create_date, category, description } = frontMatter

  return (
    <Header>
      <Title as="h1" variety="header_1" color="grey800">
        {title}
      </Title>
      <SubInfo>
        {!!category && <CategoryChip category={category} />}
        <Typo
          as="time"
          variety="title_3"
          color="grey600"
          dateTime={create_date}
        >
          {create_date}
        </Typo>
      </SubInfo>
      <Summary variety="title_2" color="grey800">
        {description}
      </Summary>
    </Header>
  )
}

export default PostHeader

const Header = styled.header`
  display: flex;
  flex-direction: column;
`

const Title = styled(Typo)`
  margin: 30px 0 20px;
`

const SubInfo = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
  width: fit-content;
`

const Summary = styled(Typo)`
  margin-top: 10px;
`
