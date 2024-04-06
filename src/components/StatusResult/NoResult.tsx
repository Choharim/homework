import React from 'react'
import Flex from '../flex'
import styled from '@emotion/styled'
import Typo from '../typo'
import Icon from '../icon'

function NoResult() {
  return (
    <NoResultSection
      as="section"
      direction="column"
      align="center"
      justify="center"
      gap="24px"
    >
      <Icon
        type="FillTriangleExclamationMark"
        color="grey700"
        width={48}
        height={48}
      />
      <Typo as="h1" variety="title_1" color="grey700">
        요청하신 컨텐츠를 찾을 수 없어요.
      </Typo>
    </NoResultSection>
  )
}

export default NoResult

const NoResultSection = styled(Flex)`
  margin: 100px 0;
`
