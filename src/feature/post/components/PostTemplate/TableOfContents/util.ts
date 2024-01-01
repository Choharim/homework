import { HEADERS_OF_CONTENTS } from './constant'
import { HeadersOfContents } from './type'

export const setTOCId = (headingElements: Element[]) => {
  let h2Count = 0
  let h3Count = 0

  headingElements.forEach((header) => {
    if (!isHeadersOfContents(header.localName)) return

    if (header.localName === 'h2') {
      h2Count++
      h3Count = 0
    } else {
      h3Count++
    }

    header.id = getTOCId({
      headerText: `${header.textContent}`,
      headerType: header.localName,
      h2Count,
      h3Count,
    })
  })
}

const isHeadersOfContents = (
  headerName: string
): headerName is HeadersOfContents => {
  return HEADERS_OF_CONTENTS.includes(headerName as HeadersOfContents)
}

type Params = {
  headerText: string
  h2Count: number
  h3Count: number
  headerType: HeadersOfContents
}

const getTOCId = ({ headerText, headerType, h2Count, h3Count }: Params) => {
  const group = headerType === 'h2' ? h2Count : `${h2Count}_${h3Count}`

  return `${group}-${headerText.replace(/ /g, '_')}`
}
