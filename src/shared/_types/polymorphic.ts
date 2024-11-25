import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'
import { CombineType } from '.'

type WithAsProp<E extends ElementType> = {
  as?: E
}

type PolymorphicProps<E extends ElementType> = CombineType<
  ComponentPropsWithoutRef<E>,
  WithAsProp<E>
>

export type PolymorphicComponentProps<
  E extends ElementType,
  Props = unknown
> = CombineType<PolymorphicProps<E>, Props>

export type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref']

export type PolymorphicComponentPropsWithRef<
  E extends ElementType,
  Props
> = PolymorphicComponentProps<E, Props> & { ref?: PolymorphicRef<E> }

export type ObjectKey = string | number | symbol
