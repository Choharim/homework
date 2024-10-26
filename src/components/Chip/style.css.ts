import FONT from '@/styles/constants/font'
import {
  ComplexStyleRule,
  createVar,
  style,
  styleVariants,
} from '@vanilla-extract/css'
import { Theme } from '.'
import COLOR from '@/styles/constants/color'

const STYLE_BY_SIZE: Record<Theme['size'], ComplexStyleRule> = {
  s: { padding: '2px 6px', ...FONT.caption_1 },
  m: { padding: '4px 8px', ...FONT.title_3 },
  l: { padding: '6px 10px', ...FONT.title_2 },
}

export const size = styleVariants(STYLE_BY_SIZE)

type ColorType = {
  accent: string
  accentHalf: string
  accentContrast: string
}

export const COLOR_TYPE_BY_VARIETY: Record<Theme['color'], ColorType> = {
  grey: {
    accent: COLOR.grey800,
    accentHalf: COLOR.grey400,
    accentContrast: COLOR.grey50,
  },
  primary: {
    accent: COLOR.primary600,
    accentHalf: COLOR.primary100,
    accentContrast: COLOR.primary50,
  },
}

export const accentVar = createVar()
export const accentContrastVar = createVar()
export const accentHalfVar = createVar()

const STYLE_BY_VARIETY: Record<Theme['variety'], ComplexStyleRule> = {
  solid: {
    backgroundColor: accentVar,
    color: accentContrastVar,
  },
  soft: {
    backgroundColor: accentHalfVar,
    color: accentVar,
  },
  surface: {
    backgroundColor: accentContrastVar,
    color: accentVar,
    border: `1px solid ${accentHalfVar}`,
  },
  outline: {
    color: accentVar,
    border: `1px solid ${accentVar}`,
  },
}

export const variety = styleVariants(STYLE_BY_VARIETY)

export const wrapper = style({
  width: 'fit-content',
  borderRadius: 8,
  display: 'inline-block',

  ':empty': {
    display: 'none',
  },
})
