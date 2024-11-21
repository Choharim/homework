import React, { PropsWithChildren } from 'react'

import Flex from '@/components/Flex'

import Chip from './Chip'
import * as style from './style/categoryFilter.css'

const CategoryFilter = ({ children }: PropsWithChildren) => {
  return (
    <Flex align="center" gap="16px" wrap="wrap" className={style.wrapper}>
      {children}
    </Flex>
  )
}

export default Object.assign(CategoryFilter, {
  Chip,
})
