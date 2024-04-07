import { css } from '@emotion/react'
import { ToastBoxStyle } from './ToastBox'
import COLOR from '@/styles/constants/color'

const VARIETY: Record<
  ToastBoxStyle['variety'],
  { background: string; text: string }
> = {
  confirm: { background: COLOR.primary200, text: COLOR.white },
  error: {
    background: COLOR.warning,
    text: COLOR.white,
  },
  normal: {
    background: COLOR.primary400,
    text: COLOR.white,
  },
}

const getVariety = (variety: ToastBoxStyle['variety']) => {
  const { background, text } = VARIETY[variety]

  return css`
    background-color: ${background};
    color: ${text};
  `
}

export default getVariety
