const isBrowser = () => {
  return typeof window !== 'undefined'
}

export const getElementById = (id: string) => {
  if (!isBrowser()) return

  return document.getElementById(id)
}
