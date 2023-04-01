import { useState } from 'react'

import { getRandomNumber } from '@/utils/number'
import { Toast } from '@/components/toast/type'
import { TOAST_TIMEOUT } from '@/components/toast/constant'

const useToast = () => {
  const [toasts, setToasts] = useState<Array<Toast>>([])

  const clear = (id: number) => {
    const timeout = setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
      clearTimeout(timeout)
    }, TOAST_TIMEOUT)
  }

  const addToast = ({ variety, desc }: Pick<Toast, 'desc' | 'variety'>) => {
    const id = getRandomNumber()

    setToasts((prev) => [
      ...prev,
      {
        id,
        variety,
        desc,
      },
    ])

    clear(id)
  }

  return { addToast, toasts }
}

export default useToast
