import FONT from '@/styles/constants/font'

import { ChipStyle } from '.'
import COLOR from '@/styles/constants/color'
import { recipe } from '@vanilla-extract/recipes'
import { CSSProperties } from 'react'
import { createThemeContract } from '@vanilla-extract/css'

const SIZE: Record<ChipStyle['size'], CSSProperties> = {
  s: { padding: '2px 6px', borderRadius: 6, ...FONT.caption_2 },
  m: { padding: '4px 8px', borderRadius: 8, ...FONT.caption_1 },
  l: { padding: '4px 10px', borderRadius: 8, ...FONT.title_3 },
}

type ColorVariant = 'accent' | 'accentHalf' | 'accentContrast'
export const COLOR_VARIANT: Record<
  ChipStyle['color'],
  Record<ColorVariant, string>
> = {
  grey: {
    accent: COLOR.grey900,
    accentHalf: COLOR.grey400,
    accentContrast: COLOR.grey50,
  },
  primary: {
    accent: COLOR.primary400,
    accentHalf: COLOR.primary200,
    accentContrast: COLOR.primary50,
  },
}

export const vars = createThemeContract({
  accent: '',
  accentHalf: '',
  accentContrast: '',
})

const VARIANT: Record<ChipStyle['variety'], CSSProperties> = {
  solid: {
    backgroundColor: vars.accent,
    color: vars.accentContrast,
  },
  soft: {
    backgroundColor: vars.accentContrast,
    color: vars.accent,
  },
  surface: {
    border: `1px solid ${vars.accentHalf}`,
    backgroundColor: vars.accentContrast,
    color: vars.accent,
  },
  outline: {
    border: `1px solid ${vars.accent}`,
    color: vars.accent,
  },
}

export const chip = recipe({
  base: {
    width: 'fit-content',
    display: 'inline-block',
    ':empty': {
      display: 'none',
    },
  },
  variants: {
    variety: VARIANT,
    size: SIZE,
  },
})
