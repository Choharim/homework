import { Device, FontKey } from './type'

const FONT = {
  header_1: {
    fontSize: '2.25rem', // 약 34px
    lineHeight: '1.5',
    fontWeight: 600,
  },
  header_2: {
    fontSize: '2rem',
    lineHeight: '1.5',
    fontWeight: 600,
  },
  header_3: {
    fontSize: '1.75rem',
    lineHeight: '1.6',
    fontWeight: 600,
  },

  title_1: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    fontWeight: 500,
  },
  title_2: {
    fontSize: '1.375rem',
    lineHeight: '1.6',
    fontWeight: 500,
  },
  title_3: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
    fontWeight: 500,
  },

  subtitle_1: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    fontWeight: 500,
  },
  subtitle_2: {
    fontSize: '1rem',
    lineHeight: '1.8',
    fontWeight: 500,
  },
  subtitle_3: {
    fontSize: '0.875rem',
    lineHeight: '1.8',
    fontWeight: 500,
  },

  caption_1: {
    fontSize: '0.75rem',
    lineHeight: '1.8',
    fontWeight: 500,
  },
  caption_2: {
    fontSize: '0.6875rem',
    lineHeight: '1.8',
    fontWeight: 500,
  },

  // 본문
  body_1: {
    fontSize: '1rem',
    lineHeight: '1.8',
    fontWeight: 400,
  },
  body_2: {
    fontSize: '0.875rem',
    lineHeight: '1.8',
    fontWeight: 400,
  },
  detail_1: {
    fontSize: '0.75rem',
    lineHeight: '1.8',
    fontWeight: 400,
  },
  detail_2: {
    fontSize: '0.6875rem',
    lineHeight: '1.8',
    fontWeight: 400,
  },
} as const

export default FONT

const RESPONSIVE_FONT: Partial<
  Record<FontKey, Partial<Record<Device, FontKey>>>
> = {
  header_1: {
    mobile: 'header_2',
  },
  header_2: {
    mobile: 'header_3',
  },
  header_3: {
    mobile: 'title_1',
  },
  title_1: {
    mobile: 'title_2',
  },
  title_2: {
    mobile: 'title_3',
  },
  title_3: {
    mobile: 'subtitle_1',
  },
  subtitle_1: {
    mobile: 'subtitle_2',
  },
}

export const getResponsiveFont = (font: FontKey): Record<Device, FontKey> => {
  const responsiveFont = RESPONSIVE_FONT[font] ?? {}

  return {
    pc: font,
    tablet: responsiveFont.tablet || font,
    mobile: responsiveFont.mobile || font,
  }
}
