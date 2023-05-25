import React from 'react'
import styled from '@emotion/styled'

import Logo from '@/components/Logo'
import MetaHead from '@/components/layout/MetaHead'

import { PAGE_PATH } from '@/constants/route'
import { BLOG } from '@/domain/owner/constant'
import { NextPageWithLayout } from '@/shared/types/layout'
import FONT from '@/styles/constants/font'

const About: NextPageWithLayout = () => {
  return (
    <>
      <MetaHead
        title={PAGE_PATH.about.label}
        description={`${BLOG.fullName}의 의미`}
      />
      <Box>
        <LogoWrapper>
          <Logo isFold={false} variety="header_1" />
        </LogoWrapper>
        <DescriptionWrapper>
          <Description>
            <Keyword>기본기</Keyword>에 가치를 둡니다.
          </Description>
          <Description>
            <Strong>단단하고 깊은 뿌리</Strong>를 가진 나무는,
            <br />
            폭풍이나 강풍 중에 넘어질 가능성이 적어 <Strong>안정적</Strong>
            입니다.
            <br />
            토양 깊숙이 위치한 양분에 접근할 수 있어{' '}
            <Strong>강하고 건강하게</Strong> 자랄 수 있습니다.
            <br />
            <Strong>건강하게 오랫동안</Strong> 생태계에 <Strong>도움</Strong>이
            되는 나무로 살아갑니다.
          </Description>
          <Description>
            <Strong>탄탄한 기본기</Strong>는,
            <br />
            <Strong>넓은 관점</Strong>을 가지게 하고
            <br /> <Strong>깊은 이해</Strong>를 얻을 수 있으며
            <br /> 견고한 기반으로 <Strong>더 빠르게 성장</Strong> 하도록
            선순환을 이룰 수 있기에
          </Description>
          <Description>
            <Strong>기본기</Strong>에 초점을 두며 시야를 넓혀가고 있습니다.
          </Description>
        </DescriptionWrapper>
      </Box>
    </>
  )
}

export default About

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 30px 0;
`
const LogoWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.p`
  word-break: keep-all;
  ${FONT.title_2};
  color: ${({ theme }) => theme.color.grey700};
  margin: 10px 0;
`

const Strong = styled.strong`
  color: ${({ theme }) => theme.color.primary400};
`

const Keyword = styled(Strong)`
  ${FONT.header_4};
`
