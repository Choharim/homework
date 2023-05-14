import { Variety } from './type'

export const TOAST_PORTAL_ID = 'toast-portal'

export const DESC: { [key in Variety]: string } = {
  confirm: '✅ 확인되었습니다.',
  error: '❗ 오류가 발생했습니다.',
  normal: '',
}

export const TOAST_TOP_POSITION = 24

export const TOAST_TIMEOUT = 3000
