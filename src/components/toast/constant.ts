import { CSSObject } from 'styled-components'

import { Variety } from './type'
import { THEME } from '@/styles/theme'

export const VARIETY: { [key in Variety]: CSSObject } = {
  confirm: {
    backgroundColor: THEME.color.primary200,
    color: THEME.color.white,
  },
  error: {
    backgroundColor: THEME.color.warning,
    color: THEME.color.white,
  },
  normal: {
    backgroundColor: THEME.color.primary200,
    color: THEME.color.white,
  },
}

export const DESC: { [key in Variety]: string } = {
  confirm: '✅ 확인되었습니다.',
  error: '오류가 발생했습니다.',
  normal: '',
}

export const TOAST_TOP_POSITION = 24

export const TOAST_TIMEOUT = 3000
