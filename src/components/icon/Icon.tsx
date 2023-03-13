import { SVGAttributes } from 'react'
import { useTheme } from 'styled-components'

import { color } from '@/styles/theme'
import { ICON_COMPONENT } from './constant'

interface IconProps
  extends Pick<SVGAttributes<SVGAElement>, 'width' | 'height'> {
  type: keyof typeof ICON_COMPONENT
  stroke?: keyof typeof color
  fill?: keyof typeof color
}
const Icon = ({
  type,
  width = 22,
  height = 22,
  stroke = 'black',
  fill,
}: IconProps) => {
  const theme = useTheme()
  const IconComponent = ICON_COMPONENT[type]

  return (
    <IconComponent
      width={width}
      height={height}
      stroke={theme.color[stroke]}
      fill={!fill ? 'none' : theme.color[fill]}
      strokeWidth="2.0"
    />
  )
}

export default Icon
