import React, { HtmlHTMLAttributes } from 'react'

import { EN_NAME } from '@/feature/app/constants/owner'
import Flex from '../Flex'

import * as style from './footer.css'
import { combineClassName } from '@/styles/mixin'

type Props = Pick<HtmlHTMLAttributes<HTMLElement>, 'className'>
const Footer = ({ className }: Props) => {
  const _className = combineClassName(className, style.footer)
  return (
    <Flex as="footer" align="center" className={_className}>
      &copy; 2022 by {EN_NAME.last} {EN_NAME.first}
    </Flex>
  )
}

export default Footer
