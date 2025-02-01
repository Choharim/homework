import COLOR from '@/styles/color'
import { keyframes, styleVariants } from '@vanilla-extract/css'

const accordion = keyframes({
  '0%': {
    opacity: 0,
    width: 0,
  },
  '50%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
    width: '100%',
  },
})
export const wrapper = styleVariants({
  initial: {},
  fullname: {
    background: `linear-gradient(-225deg, ${COLOR.primary300} 0%, ${COLOR.primary400} 30%, #fbc8d4 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `${accordion} 3s ease-in-out 0.8s reverse forwards`,
  },
})
