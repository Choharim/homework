import { HeadersOfContents } from './type'

export const setTOCId = (headingElements: Element[]) => {
  let h2Count = 0
  let h3Count = 0

  headingElements.forEach((header) => {
    if ((header.localName as HeadersOfContents) === 'h2') {
      h2Count++
      h3Count = 0
    } else {
      h3Count++
    }

    header.id = getTOCId({
      headerText: `${header.textContent}`,
      headerType: header.localName as HeadersOfContents,
      h2Count,
      h3Count,
    })
  })
}

type Params = {
  headerText: string
  h2Count: number
  h3Count: number
  headerType: HeadersOfContents
}

export const getTOCId = ({
  headerText,
  headerType,
  h2Count,
  h3Count,
}: Params) => {
  const group = headerType === 'h2' ? h2Count : `${h2Count}_${h3Count}`

  return `${group}-${headerText.replace(/ /g, '_')}`
}
