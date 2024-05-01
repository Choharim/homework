import React, { PropsWithChildren } from 'react'

import Flex from '@/components/flex'

import Chip from './Chip'
import * as style from './style/categoryFilter.css'

const CategoryFilter = ({ children }: PropsWithChildren) => {
  return (
    <Flex align="center" gap="18px" wrap="wrap" className={style.wrapper}>
      {children}
    </Flex>
  )
}

export default Object.assign(CategoryFilter, {
  Chip,
})
