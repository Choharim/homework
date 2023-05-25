import '@emotion/react'

import { Color } from './type'

declare module '@emotion/react' {
  export interface Theme {
    color: Color
  }
}
