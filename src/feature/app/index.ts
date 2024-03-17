import { getSearchParamString, getSearchParams } from '@/shared/utils/url'
import { APP_PATH } from './constants/navigation'
import {
  AppPageName,
  AppPageParams,
  AppPageSearchParams,
} from './types/navigation'

class AppFeature {
  static getUri<Name extends AppPageName>(
    page: Name extends keyof AppPageParams
      ? { name: Name; params: AppPageParams[Name] }
      : { name: Name },
    searchParams?: AppPageSearchParams[Name]
  ) {
    let pathname = ''

    const getPath = APP_PATH[page.name]
    if (typeof getPath === 'function') {
      if ('params' in page) {
        pathname = getPath(page.params)
      }
    } else {
      pathname = getPath
    }
    const queryString = getSearchParamString(searchParams ?? {})
    return `${pathname}${queryString ? `?${queryString}` : queryString}`
  }

  /**
   * @description
   * 페이지 별 searchParams을 반환합니다.
   * useAppSearchParams hook과 동일한 역할을 합니다.
   */
  static getSearchParams<PageName extends keyof AppPageSearchParams>(
    pageName: PageName,
    searchParams: Record<string, string>
  ) {
    return getSearchParams(
      new URLSearchParams(searchParams)
    ) as AppPageSearchParams[PageName]
  }

  static isLocal = process.env.NEXT_PUBLIC_MODE === 'local'
  static isProduction = process.env.NEXT_PUBLIC_MODE === 'production'
}
export default AppFeature
