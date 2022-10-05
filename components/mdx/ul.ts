import styled from 'styled-components'

export default styled.ul`
  margin: 10px 0 32px;

  > li {
    position: relative;

    &::before {
      content: '-';
      display: inline-block;
      position: absolute;
      top: 0;
      left: -25px;
    }
  }
`
