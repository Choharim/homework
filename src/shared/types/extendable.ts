/**
 * @description
 * 타입이 충돌날 경우, 두번째 제네릭 타입을 우선시합니다.
 */
export type CombineType<Type, OverrideType> = OverrideType &
  Omit<Type, keyof OverrideType>
