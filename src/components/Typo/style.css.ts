import { createObjectByFormatter, getObjectKeys } from '@/shared/utils/object'
import COLOR from '@/styles/constants/color'
import FONT from '@/styles/constants/font'
import { recipe } from '@vanilla-extract/recipes'
import { TypoStyle } from '.'
import { CSSProperties } from 'react'

export const typo = recipe({
  base: {
    selectors: {
      '&:empty': {
        display: 'none',
      },
    },
  },
  variants: {
    variety: FONT,
    color: createObjectByFormatter<TypoStyle['color'], CSSProperties>(
      [...getObjectKeys(COLOR), 'inherit'],
      (key) => {
        return {
          color: key === 'inherit' ? 'inherit' : COLOR[key],
        }
      }
    ),
  },
})
