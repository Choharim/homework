import Layout from '@/components/layout/Layout'
import Logo from '@/components/Logo'
import { DEVICE_SIZE, PAGE_PATH } from '@/constants/common'
import { BLOG_NAME } from '@/domain/owner/constant'
import React from 'react'
import styled, { css } from 'styled-components'

const About = () => {
  return (
    <Box>
      <LogoWrapper>
        <CustomLogo isFold={false} isHighlightInitial />
      </LogoWrapper>
      <DescriptionWrapper>
        <Paragraph>
          <Keyword>가치있는 뿌리</Keyword>라는 의미로
          <br />
          ‘성장’보단 ‘<Strong>올바르고 좋은</Strong>’ 성장에 초점을 두는 것을
          말합니다.
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          단단하고 깊은 뿌리를 가진 나무는,
          <br />
          폭풍이나 강풍 중에 넘어질 가능성이 적어 <Strong>더 안정적</Strong>
          입니다.
          <br />
          토양 깊숙이 위치한 양분에 접근할 수 있어{' '}
          <Strong>더 강하고 건강하게</Strong> 자랄 수 있습니다.
          <br />
          건강하며 오래 살 수 있도록 도와주어 생태계에 도움이 되는 나무로
          살아갑니다.
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          모든 성장은 의미가 있고 귀중하지만 더 좋은 성장은,
          <br />
          <Strong>넓은 관점</Strong>을 가지게 하고
          <br /> <Strong>깊은 이해</Strong>를 얻을 수 있으며
          <br /> 견고한 기반으로 <Strong>더 빠르고 좋은 성장</Strong>을 하도록
          선순환을 이룰 수 있기에
        </Paragraph>
        <br />
        <Paragraph>
          가치있는 뿌리를 가진 나무가 되기 위해 <Strong>기본기</Strong>를
          견고히하며 시야를 넓혀가고 있습니다.
        </Paragraph>
      </DescriptionWrapper>
    </Box>
  )
}

export default About

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      title={PAGE_PATH.About.label}
      description={`${BLOG_NAME.fullName}의 의미`}
    >
      {page}
    </Layout>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const LogoWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
`

const MIN_SIZE = `@media screen and (max-width: ${DEVICE_SIZE.mobile}px)`

const CustomLogo = styled(Logo)`
  margin: 30px 0 50px;

  ${({ theme }) => css`
    ${theme.font.header_1};

    ${MIN_SIZE} {
      ${theme.font.header_2};
    }
  `};
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Paragraph = styled.p`
  word-break: keep-all;
  ${({ theme }) => theme.font.subtitle_2};
  font-weight: 400;
  color: ${({ theme }) => theme.color.grey800};
`

const Strong = styled.strong`
  color: ${({ theme }) => theme.color.primary400};
  font-weight: 500;
`

const Keyword = styled(Strong)`
  font-size: 22px;
`
