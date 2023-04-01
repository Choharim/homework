import 'styled-components'
import { COLOR, FONT, MEDIA } from './theme'
import {} from 'styled-components/cssprop'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof COLOR
    font: typeof FONT
    media: typeof MEDIA
  }
}
