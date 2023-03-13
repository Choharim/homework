import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import Navbar, { NAVBAR_HEIGHT } from './Navbar'
import Footer, { FOOTER_HEIGHT } from './Footer'
import Frame from './Frame'
import HeadMeta, { HeadMetaProps } from '../HeadMeta'

interface Props
  extends Pick<HTMLAttributes<HTMLElement>, 'className'>,
    HeadMetaProps {
  children: React.ReactNode

  resetFrameStyle?: boolean
  hasFooter?: boolean
}

const Layout = ({
  title,
  description,
  resetFrameStyle,
  className,
  children,
  hasFooter = true,
}: Props) => {
  return (
    <LayoutFrame className={className}>
      <HeadMeta title={title} description={description} />

      <Navbar />
      {resetFrameStyle ? (
        <main>{children}</main>
      ) : (
        <Main css={mainStyle} asTag="main">
          {children}
        </Main>
      )}
      {hasFooter && <Layout.Footer />}
    </LayoutFrame>
  )
}

export default Layout

/**
 * @remarks
 * Layout를 확장하여 Footer를 선택자로 선택해 Footer의 스타일을 추가하기 위해
 * - Layout을 확장한 StyledComponent에 Footer 컴포넌트를 selector로 사용할 수 없음. selector는 styledComponent만 가능.
 */
Layout.Footer = styled(Footer)``

const LayoutFrame = styled.div`
  display: flex;
  flex-direction: column;
`
const mainStyle = css`
  padding-top: ${NAVBAR_HEIGHT}px;
`

/**
 * @remarks
 * - styled-component를 '컴포넌트'로 확장해서 사용할 때, 태그의 타입을 변경하면 className을 전달해주어도 스타일이 상속되지 않음.
 * - 컴포넌트를 확장했을 때 props를 as로 넘기지 않고 다른 이름으로 넘기면 가능
 * - styled-component를 확장하여 사용할 때는 태그 변경해도 상속 가능
 */
const Main = styled(Frame)`
  display: flex;
  flex-direction: column;
  min-height: calc((100vh - ${FOOTER_HEIGHT}px));
`
