import Typo from '@/components/Typo'
import React from 'react'

import * as styles from './IntroCard.css'

function IntroCard() {
  return (
    <div className={styles.frame}>
      <div className={styles.image}>👧🏻</div>

      <article className={styles.bg}>
        <div className={styles.card}>
          <Typo as="h1" variety="title_2" color="grey700">
            꾸밈 꾸밈꾸밈꾸밈꾸밈꾸밈꾸밈꾸밈꾸밈꾸밈
            <br />
            <Typo as="em" variety="header_3" color="primary500">
              개발자 조하림
            </Typo>{' '}
            입니다
          </Typo>

          <Typo as="p" variety="body_1" color="grey900">
            설명 설명 설명 설명설명 설명 설명 설명설명 설명 설명 설명설명 설명
            설명 설명설명 설명 설명 설명설명 설명 설명 설명설명 설명 설명
            설명설명 설명 설명 설명설명 설명 설명 설명설명 설명 설명 설명설명
            설명 설명 설명설명 설명 설명 설명설명 설명 설명 설명설명 설명 설명
            설명설명 설명 설명 설명설명 설명 설명 설명
          </Typo>
        </div>
      </article>
    </div>
  )
}

export default IntroCard
