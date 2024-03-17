import { APP_PAGE_NAMES, appPageName } from '../constants/navigation'

export type AppPageName = typeof APP_PAGE_NAMES[number]

/**
 * @description
 * 페이지 별 props 타입을 정의합니다.
 */
export type AppPageProps<Name extends AppPageName> = {
  params: Name extends keyof AppPageParams
    ? AppPageParams[Name]
    : Record<string, never>
  searchParams: AppPageSearchParams[Name]
}

/**
 * @description
 * url path에 필요한 타입을 정의합니다.
 * @example
 * /dynamic/[id] -> { id: string }
 */
export type AppPageParams = {
  [appPageName.blogDetails]: {
    id: string
  }
}

/**
 * @description
 * searchParams에 들어가는 타입을 정의합니다.
 * @example
 * /something?a=first&b=second -> { a: string, b: string }
 */
export type AppPageSearchParams = {
  [key in AppPageName]: key extends keyof PageSearchParams
    ? PageSearchParams[key] & Partial<RedirectSearchParam>
    : Partial<RedirectSearchParam>
}

// eslint-disable-next-line @typescript-eslint/ban-types
type PageSearchParams = {}

export type RedirectSearchParam = {
  from: string
}
