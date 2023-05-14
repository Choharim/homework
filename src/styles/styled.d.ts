import 'styled-components'
import {} from 'styled-components/cssprop'

import COLOR from './constants/color'
import FONT from './constants/font'
import MEDIA from './constants/media'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof COLOR
    font: typeof FONT
    media: typeof MEDIA
  }
}
