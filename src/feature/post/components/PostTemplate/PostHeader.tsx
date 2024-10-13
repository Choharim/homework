import { PostFrontMatter } from '@/entity/post/type'

import Typo from '@/components/typo'
import Flex from '@/components/flex'

import * as style from './style/postHeader.css'
import CategoryChip from '../CategoryChip'

type Props = {
  frontMatter: PostFrontMatter
}

const PostHeader = ({ frontMatter }: Props) => {
  const { title, create_date, category, description } = frontMatter

  return (
    <Flex direction="column" className={style.wrapper}>
      <Typo
        as="time"
        dateTime={create_date}
        variety="caption_1"
        color="grey700"
        className={style.date}
      >
        {create_date}
      </Typo>

      <Flex direction="column" gap="20px">
        <Typo as="h1" variety="header_1" color="grey800">
          {title}
        </Typo>

        <Typo variety="title_2" color="grey900">
          {description}
        </Typo>

        <CategoryChip size="m">{category}</CategoryChip>
      </Flex>
    </Flex>
  )
}

export default PostHeader
