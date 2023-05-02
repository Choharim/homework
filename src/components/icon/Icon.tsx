import React, { HTMLAttributes, SVGAttributes } from 'react'
import { useTheme } from 'styled-components'

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
  ({ type, width = 18, height, stroke = 'black', fill, ...restProps }, ref) => {
    const theme = useTheme()
    const IconComponent = ICON_COMPONENT[type]

    return (
      <IconComponent
        ref={ref}
        width={width}
        height={height}
        stroke={theme.color[stroke]}
        fill={!fill ? 'none' : theme.color[fill]}
        strokeWidth="2.0"
        {...restProps}
      />
    )
  }
)

export default Icon

Icon.displayName = 'Icon'
