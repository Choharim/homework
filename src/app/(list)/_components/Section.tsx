import Icon from '@/components/Icon'
import Typo from '@/components/Typo'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'
import * as styles from './Section.css'

interface Props {
  title: string
  href?: LinkProps['href']
}
function Section({ children, title, href }: PropsWithChildren<Props>) {
  return (
    <section className={styles.frame}>
      <div className={styles.header}>
        <Typo as="h2" variety="header_3" color="grey900">
          {title}
        </Typo>

        {!!href && (
          <Link href={href} className={styles.link}>
            <Typo variety="subtitle_2" color="inherit">
              전체보기
            </Typo>
            <Icon type="ArrowRight" color="inherit" />
          </Link>
        )}
      </div>

      {children}
    </section>
  )
}

export default Section
