import { getSearchParamString } from '@/shared/utils/url'
import {
  AppPageName,
  AppPagePathParams,
  AppPageSearchParams,
} from './types/navigation'
import { APP_URL } from './constants/navigation'

class AppFeature {
  static getAppURI = <Name extends AppPageName>(
    page: keyof AppPagePathParams<Name> extends never
      ? { name: Name }
      : { name: Name; pathParams: AppPagePathParams<Name> },
    searchParams?: AppPageSearchParams<Name>
  ) => {
    const getURL = APP_URL[page.name]

    let pathname

    if ('pathParams' in page) {
      pathname = getURL(page.pathParams)
    } else {
      pathname = (getURL as () => string)()
    }

    const searchParamsString = getSearchParamString(searchParams ?? {})

    return `${pathname}${
      searchParamsString ? `?${searchParamsString}` : searchParamsString
    }`
  }

  static isLocal = process.env.NEXT_PUBLIC_MODE === 'local'
  static isProduction = process.env.NEXT_PUBLIC_MODE === 'production'
}
export default AppFeature
