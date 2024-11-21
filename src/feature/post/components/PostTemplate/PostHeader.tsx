import { PostFrontMatter } from '@/entity/post/type'

import Typo from '@/components/Typo'
import Flex from '@/components/Flex'

import * as style from './style/postHeader.css'
import CategoryChip from '../CategoryChip'

type Props = {
  frontMatter: PostFrontMatter
}

const PostHeader = ({ frontMatter }: Props) => {
  const { title, create_date, category, description } = frontMatter

  return (
    <Flex direction="column" className={style.wrapper}>
      <Flex direction="column" gap="24px">
        <Typo as="h1" variety="header_1" color="grey900">
          {title}
        </Typo>

        <Typo variety="title_1" color="grey800">
          {description}
        </Typo>
      </Flex>

      <Flex align="center" justify="between" className={style.extra}>
        <CategoryChip size="m">{category}</CategoryChip>
        <Typo
          as="time"
          dateTime={create_date}
          variety="title_3"
          color="grey600"
        >
          {create_date}
        </Typo>
      </Flex>
    </Flex>
  )
}

export default PostHeader
