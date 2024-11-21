import { ObjectKey } from '../types/polymorphic'

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

/**
 * @description
 * value가 동일하거나 규칙을 가질 경우 사용할 수 있습니다.
 * @example
 * createObjectByFormatter(['key1', 'key2'], (key) => { value: `${key}의 값`}) // { key1: 'key1의 값', key2: 'key2의 값'}
 * createObjectByFormatter(['key1', 'key2'], {value: '값'})  // { key1: '값', key2: '값'}
 */

type ValueFormatter<Key extends ObjectKey, Value> = (key: Key) => Value
const isValueFormatter = <Key extends ObjectKey, Value>(
  value: Value | ValueFormatter<Key, Value>
): value is ValueFormatter<Key, Value> => {
  return typeof value === 'function'
}
export const createObjectByFormatter = <Key extends ObjectKey, Value>(
  arr: Readonly<Array<Key>>,
  value: ((key: Key) => Value) | Value
) => {
  return arr.reduce((acc, key) => {
    acc[key] = isValueFormatter(value) ? value(key) : value
    return acc
  }, {} as Record<Key, Value>)
}

/**
 * @description
 * object key의 타입을 유지한 채, key를 요소로한 배열을 리턴합니다.
 * @example
 * getObjectKeys({ a: 'hi', b: 'hello' }) // 추론 타입 ("a" | "b")[]
 */
export const getObjectKeys = <T extends Record<string, unknown>>(
  obj: T
): (keyof T)[] => {
  return Object.keys(obj)
}
