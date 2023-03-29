import React, { SVGAttributes } from 'react'
import styled, { useTheme } from 'styled-components'

import { color } from '@/styles/theme'
import { ICON_COMPONENT } from './constant'

interface IconProps
  extends Pick<SVGAttributes<SVGAElement>, 'width' | 'height' | 'className'> {
  type: keyof typeof ICON_COMPONENT
  stroke?: keyof typeof color
  fill?: keyof typeof color
}
const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    { type, width = 22, height = 22, stroke = 'black', fill, className },
    ref
  ) => {
    const theme = useTheme()
    const IconComponent = ICON_COMPONENT[type]

    return (
      <Wrapper className={className} ref={ref}>
        <IconComponent
          width={width}
          height={height}
          stroke={theme.color[stroke]}
          fill={!fill ? 'none' : theme.color[fill]}
          strokeWidth="2.0"
        />
      </Wrapper>
    )
  }
)

export default Icon

Icon.displayName = 'Icon'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`
