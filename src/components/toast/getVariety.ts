import { CSSObject, Theme } from '@emotion/react'

import { ToastBoxStyle } from './ToastBox'

const VARIETY: Record<ToastBoxStyle['variety'], (theme: Theme) => CSSObject> = {
  confirm: (theme: Theme) => ({
    backgroundColor: theme.color.primary200,
    color: theme.color.white,
  }),
  error: (theme: Theme) => ({
    backgroundColor: theme.color.warning,
    color: theme.color.white,
  }),
  normal: (theme: Theme) => ({
    backgroundColor: theme.color.primary400,
    color: theme.color.white,
  }),
}

const getVariety = (variety: ToastBoxStyle['variety'], theme: Theme) => {
  return VARIETY[variety](theme)
}

export default getVariety
