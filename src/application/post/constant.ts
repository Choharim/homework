import { Category } from '@/domain/post/type'

export const CATEGORY_TITLE: { [key in Category]: string } = {
  algorithms: '알고리즘',
  'data-structure': '자료구조',
  'operating-system': '운영체제',
  dev: '개발',
  all: '전체',
}

export const POST_GROUP_COUNT = 6

export const HEADERS_OF_CONTENTS = ['h2', 'h3'] as const
