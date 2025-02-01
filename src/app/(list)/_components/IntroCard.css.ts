import COLOR from '@/styles/color'
import { keyframes, style } from '@vanilla-extract/css'

export const frame = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
  margin: '40px 0',
})

const BORDER_WIDTH = 3
const BORDER_RADIUS = 24

const gradient = keyframes({
  '0%': { backgroundPosition: '15% 0%' },
  '50%': { backgroundPosition: '85% 100%' },
  '100%': { backgroundPosition: '15% 0%,' },
})

export const bg = style({
  position: 'relative',

  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      background: `linear-gradient(-225deg, ${COLOR.primary300} 0%, ${COLOR.primary400} 30%, #fbc8d4 100%)`,
      backgroundSize: '400%',
      animation: `${gradient} 2s ease-in-out infinite`,
      zIndex: -1,
      borderRadius: BORDER_RADIUS,
    },
  },
})

export const card = style({
  padding: '20px 28px',
  backgroundColor: COLOR.white,
  borderRadius: `calc(${BORDER_RADIUS}px - ${BORDER_WIDTH}px)`,
  margin: BORDER_WIDTH,

  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const image = style({
  fontSize: 120,
})
