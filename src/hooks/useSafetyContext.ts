import React, { createContext } from 'react'

const INITIAL_VALUE = null

interface Context<T> {
  context: React.Context<T | typeof INITIAL_VALUE>
  displayName?: string
}

const useSafetyContext = <T>(params: Context<T>) => {
  const context = React.useContext(params.context)

  if (context === INITIAL_VALUE) {
    throw Error(`${params.displayName}.Provider is needed`)
  }

  return context
}

export default useSafetyContext

export const createSateyContext = <T>(displayName: string) => {
  const context = createContext<T | typeof INITIAL_VALUE>(INITIAL_VALUE)
  context.displayName = displayName

  return context
}
