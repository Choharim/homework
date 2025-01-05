import { Variety } from '../_types'

export const TOAST_PORTAL_ID = 'toast-portal'

export const DESC: Readonly<Record<Variety, string>> = {
  confirm: '✅ 확인되었습니다.',
  error: '❗ 오류가 발생했습니다.',
  normal: '',
}
