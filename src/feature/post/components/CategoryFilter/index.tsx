import React, { PropsWithChildren } from 'react'

import styled from '@emotion/styled'

import Flex from '@/components/flex'

import Chip from './Chip'

const CategoryFilter = ({ children }: PropsWithChildren) => {
  return (
    <CategoryContainer align="center" gap="18px" wrap="wrap">
      {children}
    </CategoryContainer>
  )
}

export default Object.assign(CategoryFilter, {
  Chip,
})

const CategoryContainer = styled(Flex)`
  margin: 32px 0 0;
`
