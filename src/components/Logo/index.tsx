import React from 'react'
import Link from 'next/link'

import Typo from '../Typo'
import Flex from '../Flex'

import * as style from './style.css'
import AppFeature from '@/feature/application'

const alphabets = AppFeature.BLOG_NAME.fullName.split('')
const isInitial = (alphabet: string) => {
  return alphabet.toUpperCase() === alphabet
}

const Logo = () => {
  return (
    <Link href={AppFeature.getAppURI({ name: 'main' })}>
      <Flex>
        {alphabets.map((alphabet, i) => (
          <Typo
            responsive={false}
            key={`${alphabet}_${i}`}
            className={
              style.wrapper[isInitial(alphabet) ? 'initial' : 'fullname']
            }
            variety={'header_2'}
            color="primary400"
          >
            {alphabet}
          </Typo>
        ))}
      </Flex>
    </Link>
  )
}

export default React.memo(Logo)
