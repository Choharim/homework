import { CSSObject, DefaultTheme } from 'styled-components'

import { ToastBoxStyle } from './ToastBox'

const VARIETY: Record<
  ToastBoxStyle['variety'],
  (theme: DefaultTheme) => CSSObject
> = {
  confirm: (theme: DefaultTheme) => ({
    backgroundColor: theme.color.primary200,
    color: theme.color.white,
  }),
  error: (theme: DefaultTheme) => ({
    backgroundColor: theme.color.warning,
    color: theme.color.white,
  }),
  normal: (theme: DefaultTheme) => ({
    backgroundColor: theme.color.primary200,
    color: theme.color.white,
  }),
}

const getVariety = (variety: ToastBoxStyle['variety'], theme: DefaultTheme) => {
  return VARIETY[variety](theme)
}

export default getVariety
