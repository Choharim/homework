import postFeature from '@/feature/post'
import { PostCategory } from '@/entity/post/type'
import Chip from '@/components/Chip'
import AppFeature from '@/feature/app'
import Link from 'next/link'
import * as styles from './style/categoryChip.css'
interface Props {
  children: PostCategory
}
const CategoryChip = ({ children: category }: Props) => {
  return (
    <Link
      href={AppFeature.getAppURI({
        name: 'category',
        pathParams: { category },
      })}
      className={styles.link}
    >
      <Chip color="primary" size="s" variety="surface">
        {postFeature.getCategoryName(category)}
      </Chip>
    </Link>
  )
}

export default CategoryChip
