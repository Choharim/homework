import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import Flex from '../flex'
import Typo from '../typo'
import Icon from '../icon'

import * as style from './style.css'

type Props = ComponentPropsWithoutRef<'section'>
function NoResult(props: Props, forwardedRef: ForwardedRef<HTMLElement>) {
  return (
    <Flex
      {...props}
      ref={forwardedRef}
      as="section"
      direction="column"
      align="center"
      justify="center"
      gap="24px"
      className={style.wrapper}
    >
      <Icon
        type="FillTriangleExclamationMark"
        color="grey700"
        width={48}
        height={48}
      />
      <Typo as="h1" variety="title_1" color="grey700">
        요청하신 컨텐츠를 찾을 수 없어요
      </Typo>
    </Flex>
  )
}

export default forwardRef(NoResult)
