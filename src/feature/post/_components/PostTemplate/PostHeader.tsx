import { PostFrontMatter } from '@/entity/post/type'

import Typo from '@/components/Typo'
import Flex from '@/components/Flex'

import * as style from './postHeader.css'
import CategoryChip from '../CategoryChip'
import CategoryTag from '../CategoryTag'

type Props = {
  frontMatter: PostFrontMatter
}

const PostHeader = ({ frontMatter }: Props) => {
  const { title, create_date, category, description, tag } = frontMatter

  return (
    <Flex direction="column" className={style.wrapper}>
      <Typo as="time" dateTime={create_date} variety="body_2" color="grey700">
        {create_date}
      </Typo>

      <Flex direction="column" gap="8px">
        <Typo as="h1" variety="header_1" color="grey900">
          {title}
        </Typo>

        <Typo as="p" variety="body_1" color="grey800">
          {description}
        </Typo>
      </Flex>

      <Flex align="center" gap={'12px'} className={style.extra}>
        <CategoryChip size="m">{category}</CategoryChip>
        {tag.map((t, i) => (
          <CategoryTag size="m" key={`${t}-${i}`}>
            {t}
          </CategoryTag>
        ))}
      </Flex>
    </Flex>
  )
}

export default PostHeader
