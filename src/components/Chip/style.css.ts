import FONT from '@/styles/font'

import { ChipStyle } from '.'
import COLOR from '@/styles/color'
import { recipe } from '@vanilla-extract/recipes'
import { CSSProperties } from 'react'
import { createThemeContract } from '@vanilla-extract/css'
import { createObjectByFormatter } from '@/shared/utils/object'

const SIZE: Record<ChipStyle['size'], CSSProperties> = {
  s: { padding: '2px 6px', borderRadius: 8, ...FONT.subtitle_3 },
  m: { padding: '3px 8px', borderRadius: 10, ...FONT.subtitle_2 },
  l: { padding: '3px 10px', borderRadius: 12, ...FONT.subtitle_1 },
}

type ColorVariant = 'accent' | 'accentHalf' | 'accentContrast'
export const COLOR_VARIANT: Record<
  ChipStyle['color'],
  Record<ColorVariant, string>
> = {
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

const VARIANT: Record<
  ChipStyle['variety'],
  Partial<Record<'border' | 'color' | 'background', string>>
> = {
  solid: {
    background: vars.accent,
    color: vars.accentContrast,
  },
  soft: {
    background: vars.accentContrast,
    color: vars.accent,
  },
  surface: {
    border: vars.accentHalf,
    background: vars.accentContrast,
    color: vars.accent,
  },
  outline: {
    border: vars.accent,
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
    variety: createObjectByFormatter<ChipStyle['variety'], CSSProperties>(
      ['outline', 'soft', 'solid', 'surface'],
      (key) => {
        const variant = VARIANT[key]
        return {
          color: variant.color,
          backgroundColor: variant.background
            ? variant.background
            : 'transparent',
          border: `1px solid ${
            variant.border ? variant.border : 'transparent'
          }`,
        }
      }
    ),
    size: SIZE,
  },
})
