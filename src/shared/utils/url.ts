import { getWithoutEmptyField } from './object'

export const getURLRemovedQuery = (url: string) => {
  return url.split('?')[0]
}

/**
 * @description
 * URLSearchParams을 객체 리터럴로 반환합니다.
 * @example
 * const params = new URLSearchParams(...)
 * getSearchParams(params) // { foo: "bar", baz: "bar" }
 */
export const getSearchParams = (searchParams: URLSearchParams) => {
  const params = Object.fromEntries(searchParams.entries())

  return params
}

/**
 * @description
 * key와 value를 = 로, key value pair를 & 로 연결합니다.
 * @example
 * const paramsObj = { foo: "bar", baz: "bar" };
 * getSearchParamString(paramsObj) // "foo=bar&baz=bar"
 */
export const getSearchParamString = <
  T extends Record<string, string> | URLSearchParams
>(
  pageParams: T
) => {
  const filledObj = getWithoutEmptyField(pageParams)
  const searchParams = new URLSearchParams(filledObj as T)

  return searchParams.toString()
}
