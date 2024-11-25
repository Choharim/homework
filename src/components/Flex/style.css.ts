import { recipe } from '@vanilla-extract/recipes'
import { FlexStyle } from '.'
import { createThemeContract, CSSProperties } from '@vanilla-extract/css'
import { createObjectByFormatter } from '@/shared/_utils'

const JUSTIFY: Record<FlexStyle['justify'], CSSProperties['justifyContent']> = {
  start: 'start',
  center: 'center',
  end: 'end',
  between: 'space-between',
}

export const vars = createThemeContract({
  gap: '',
})

export const flex = recipe({
  base: {
    display: 'flex',
    gap: vars.gap,
  },
  variants: {
    direction: createObjectByFormatter<FlexStyle['direction'], CSSProperties>(
      ['column', 'column-reverse', 'row', 'row-reverse'],
      (key) => {
        return { flexDirection: key }
      }
    ),
    justify: createObjectByFormatter<FlexStyle['justify'], CSSProperties>(
      ['start', 'center', 'end', 'between'],
      (key) => {
        return { justifyContent: JUSTIFY[key] }
      }
    ),
    align: createObjectByFormatter<FlexStyle['align'], CSSProperties>(
      ['start', 'center', 'end', 'baseline'],
      (key) => {
        return { alignItems: key }
      }
    ),
    wrap: createObjectByFormatter<FlexStyle['wrap'], CSSProperties>(
      ['wrap', 'nowrap'],
      (key) => {
        return { flexWrap: key }
      }
    ),
  },
})
