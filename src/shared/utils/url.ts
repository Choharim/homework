export const getURLRemovedQuery = (url: string) => {
  return url.split('?')[0]
}
