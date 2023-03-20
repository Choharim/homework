import { Category } from '@/domain/post/type'

export const CATEGORY_TITLE: { [key in Category]: string } = {
  all: '전체',
  javascript: 'JS',
  typescript: 'TS',
  'operating-system': '운영체제',
  algorithms: '알고리즘',
  'data-structure': '자료구조',
  dev: '개발',
}

export const HEADERS_OF_CONTENTS = ['h2', 'h3'] as const
