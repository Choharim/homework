import { Category } from '@/domain/post/type'
import { color } from '@/styles/theme'

export const CATEGORY_TITLE: { [key in Category]: string } = {
  algorithms: '알고리즘',
  'data-structure': '자료구조',
  'operating-system': '운영체제',
  dev: '개발',
  all: '전체',
}

export const COLOR_BY_CATEGORY: {
  [key in Category]: {
    [key in 'base' | 'hover']: typeof color[keyof typeof color]
  }
} = {
  all: {
    base: color.bg,
    hover: color.primary7,
  },
  algorithms: {
    base: color.pink4,
    hover: color.pink3,
  },
  'data-structure': {
    base: color.green3,
    hover: color.green2,
  },
  'operating-system': {
    base: color.purple3,
    hover: color.purple2,
  },
  dev: { base: color.blue3, hover: color.blue2 },
}

export const POST_GROUP_COUNT = 6

export const HEADERS_OF_CONTENTS = ['h2', 'h3'] as const
