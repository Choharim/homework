/**
 * @description
 * 두 객체 타입 중 하나만 선택합니다.
 */
export type Either<T, U> = Only<T, U> | Only<U, T>
type Only<T, U> = {
  [P in keyof T]: T[P]
} & {
  [P in keyof U]?: never
}
