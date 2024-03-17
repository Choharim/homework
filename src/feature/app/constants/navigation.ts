import { getSameKeyValue } from '@/shared/utils/object'
import { AppPageName, AppPageParams } from '../types/navigation'

export const APP_PAGE_NAMES = ['main', 'blog', 'blogDetails'] as const

export const appPageName = getSameKeyValue(APP_PAGE_NAMES)

export const APP_PATH: {
  [name in AppPageName]: name extends keyof AppPageParams
    ? (params: AppPageParams[name]) => string
    : string
} = {
  [appPageName.main]: '/',
  [appPageName.blog]: '/blog',
  [appPageName.blogDetails]({ id }) {
    return `/blog/${id}`
  },
}
