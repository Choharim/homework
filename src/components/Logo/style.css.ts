import COLOR from '@/styles/constants/color'
import { createVar, keyframes, styleVariants } from '@vanilla-extract/css'

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

export const isFoldVar = createVar()

export const wrapper = styleVariants({
  initial: {
    color: COLOR.primary400,
  },
  fullname: {
    animation: `${accordion} 3s ease-in-out 0.5s ${
      !!isFoldVar && 'reverse forwards'
    }`,
  },
})
