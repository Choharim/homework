import React, { HTMLAttributes, SVGAttributes } from 'react'
import styled, { useTheme } from 'styled-components'

import { COLOR } from '@/styles/theme'
import { ICON_COMPONENT } from './constant'

interface IconProps
  extends Pick<SVGAttributes<SVGAElement>, 'width' | 'height'>,
    Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> {
  type: keyof typeof ICON_COMPONENT
  stroke?: keyof typeof COLOR
  fill?: keyof typeof COLOR
}
const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    {
      type,
      width = 22,
      height = 22,
      stroke = 'black',
      fill,
      className,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme()
    const IconComponent = ICON_COMPONENT[type]

    return (
      <Wrapper {...restProps} ref={ref}>
        <IconComponent
          className={className}
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
