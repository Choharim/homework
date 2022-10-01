import Image from 'next/image'
import styled from 'styled-components'

interface ThumbnailProps {
  src: string
}

const Thumbnail = ({ src }: ThumbnailProps) => {
  return (
    <Container>
      <Image
        src={src}
        alt={`${src}_thumbnail/`}
        layout="fill"
        objectFit="contain"
      />
    </Container>
  )
}

export default Thumbnail

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 160px;
  background-color: ${({ theme }) => theme.color.black};
`
