import { PostFrontMatter } from '@/adapter/notion/type'

import Typo from '@/components/typo'
import Chip from '@/components/Chip'
import postFeature from '../..'
import Flex from '@/components/flex'
import { css } from '@emotion/react'

type Props = {
  frontMatter: PostFrontMatter
}

const PostHeader = ({ frontMatter }: Props) => {
  const { title, create_date, category, description } = frontMatter

  return (
    <Flex
      direction="column"
      gap="16px"
      css={css`
        margin-top: 30px;
      `}
    >
      <Typo as="h1" variety="header_1" color="grey800">
        {title}
      </Typo>

      <Typo variety="title_2" color="grey700">
        {description}
      </Typo>

      <Flex direction="column" gap="4px">
        <Chip variety="soft" color="grey" size="s">
          {postFeature.getCategoryName(category)}
        </Chip>
        <Typo
          as="time"
          variety="caption_1"
          color="grey600"
          dateTime={create_date}
        >
          {create_date}
        </Typo>
      </Flex>
    </Flex>
  )
}

export default PostHeader
