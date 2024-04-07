import FONT from '@/styles/constants/font'
import { Theme } from '.'
import { SerializedStyles, css } from '@emotion/react'
import COLOR from '@/styles/constants/color'

const getStyleBySize = (size: Theme['size']) => {
  switch (size) {
    case 's':
      return css`
        padding: 2px 6px;
        ${FONT.caption_1};
      `
    case 'm':
      return css`
        padding: 4px 8px;
        ${FONT.caption_1};
      `
    case 'l':
    default:
      return css`
        padding: 4px 10px;
        ${FONT.title_3};
      `
  }
}

type ColorType = {
  accent: string
  accentHalf: string
  accentContrast: string
}

const COLOR_TYPE_BY_VARIETY: Record<Theme['color'], ColorType> = {
  grey: {
    accent: COLOR.grey600,
    accentHalf: COLOR.grey200,
    accentContrast: COLOR.grey50,
  },
  primary: {
    accent: COLOR.primary600,
    accentHalf: COLOR.primary200,
    accentContrast: COLOR.primary50,
  },
}

const getStyleByVarietyColor = ({
  variety,
  color,
}: Pick<Theme, 'color' | 'variety'>) => {
  const { accent, accentContrast, accentHalf } = COLOR_TYPE_BY_VARIETY[color]

  switch (variety) {
    case 'solid':
      return css`
        background-color: ${accent};
        color: ${accentContrast};
      `
    case 'soft':
      return css`
        background-color: ${accentHalf};
        color: ${accent};
      `

    case 'surface':
      return css`
        background-color: ${accentContrast};
        color: ${accent};
        border: 1px solid ${accentHalf};
      `

    case 'outline':
    default:
      return css`
        color: ${accent};
        border: 1px solid ${accent};
      `
  }
}

const getTheme = ({ size, variety, color }: Theme): SerializedStyles => {
  const styleBySize = getStyleBySize(size)
  const styleByVarietyColor = getStyleByVarietyColor({ variety, color })

  return css`
    ${styleBySize};
    ${styleByVarietyColor};
  `
}

export default getTheme
