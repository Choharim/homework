import React, { HtmlHTMLAttributes } from 'react'

import { AUTHOR_NAME } from '@/feature/application/constants/owner'
import Flex from '../Flex'

import * as style from './footer.css'
import { combineClassName } from '@/styles/mixin'
import Typo from '../Typo'

type Props = Pick<HtmlHTMLAttributes<HTMLElement>, 'className'>
const Footer = ({ className }: Props) => {
  const _className = combineClassName(className, style.footer)
  return (
    <Flex as="footer" align="center" className={_className}>
      <Typo variety="subtitle_1" color="grey700">
        &copy; 2022 by {AUTHOR_NAME.en}
      </Typo>
    </Flex>
  )
}

export default Footer
