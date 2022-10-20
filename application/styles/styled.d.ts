import 'styled-components'
import { color, font, media } from './theme'
import {} from 'styled-components/cssprop'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof color
    font: typeof font
    media: typeof media
  }
}
