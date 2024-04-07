/**
 * @description
 * string 타입의 배열 요소로, key와 value를 동일하게 갖는 객체 리터럴을 반환합니다.
 * @example
 * const test = ['test1','test2'] as const
 * const testObj = getSameKeyValue(test) // { test1: 'test1', test2: 'test2' }
 */
export const getSameKeyValue = <Value extends string>(
  array: readonly Value[]
) => {
  return array.reduce((acc, curr) => {
    acc[curr] = curr

    return acc
  }, {} as { [key in Value]: key })
}

/**
 * @description
 * key가 없는 빈 Object인지 확인합니다.
 * @example
 * isEmptyObject({}) // true
 *
 * const fn = () => { ... };
 * isEmptyObject(fn) // console 'Object 타입이 아닙니다.'
 */
const isEmptyObject = (obj: object) => {
  if (obj?.constructor !== Object) {
    console.error('Object 타입이 아닙니다.')
    return
  }

  return obj.constructor === Object && Object.values(obj).length === 0
}

/**
 * @description
 * Object의 'null, undefined, 빈 배열, 빈 객체'를 탐색하여 제거합니다.
 */
export const getWithoutEmptyField = <T extends object>(obj: T): Partial<T> => {
  const filledObj = {}

  Object.entries(obj).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') return
    if (Array.isArray(value)) {
      if (!value.length) return
    } else if (typeof value === 'object') {
      if (isEmptyObject(value)) return
    }

    ;(filledObj as Record<string | number, unknown>)[key] = value
  })

  return filledObj
}
