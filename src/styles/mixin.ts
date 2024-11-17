import clsx from 'clsx'
import { CSSProperties } from 'react'

export const combineClassName = (...params: Parameters<typeof clsx>) => {
  return clsx(params)
}

export const limitTextLine = (lineCount: number): CSSProperties => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: lineCount,
  lineClamp: lineCount,
  WebkitBoxOrient: 'vertical',
})
