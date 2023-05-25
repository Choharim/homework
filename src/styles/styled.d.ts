import 'styled-components'
import {} from 'styled-components/cssprop'

import COLOR from './constants/color'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof COLOR
  }
}
