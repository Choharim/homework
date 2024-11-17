import React, { ComponentProps } from 'react'
import Link from 'next/link'

import Typo from '../typo'
import Flex from '../flex'

import { BLOG } from '@/feature/app/constants/owner'
import * as style from './style.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import AppFeature from '@/feature/app'

interface Props extends ComponentProps<typeof Typo> {
  isFold: boolean
}
const Logo = ({ isFold, ...typoProps }: Props) => {
  const alphabets = BLOG.fullName.split('')

  const isInitial = (alphabet: string) => {
    return alphabet.toUpperCase() === alphabet
  }

  return (
    <Link href={AppFeature.getAppURI({ name: 'main' })}>
      <Flex>
        {alphabets.map((alphabet, i) => (
          <Typo
            key={`${alphabet}_${i}`}
            className={
              style.wrapper[isInitial(alphabet) ? 'initial' : 'fullname']
            }
            style={assignInlineVars({
              [style.isFoldVar]: isFold ? 'fold' : '',
            })}
            variety={typoProps.variety ?? 'header_4'}
            color="primary400"
            {...typoProps}
          >
            {alphabet}
          </Typo>
        ))}
      </Flex>
    </Link>
  )
}

export default React.memo(Logo)
