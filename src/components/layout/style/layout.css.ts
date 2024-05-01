import { style } from '@vanilla-extract/css'
import { FOOTER_HEIGHT } from './footer.css'
import { NAVBAR_HEIGHT } from './navbar.css'

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: `100vh - ${FOOTER_HEIGHT}px`,
  paddingTop: NAVBAR_HEIGHT,
})
