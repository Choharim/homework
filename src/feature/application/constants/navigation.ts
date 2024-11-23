import { AppPageName, AppPagePathParams } from '../types/navigation'

export const APP_PAGE_NAMES = ['main', 'blogDetails', 'category'] as const

export const APP_URL: {
  [Name in AppPageName]: keyof AppPagePathParams<Name> extends never
    ? () => string
    : (params: AppPagePathParams<Name>) => string
} = {
  main() {
    return '/'
  },
  blogDetails({ id }) {
    return `/blog/${id}`
  },
  category({ category }) {
    return `/category/${category}`
  },
}
