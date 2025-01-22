'use client'
import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { Toast } from '../_types'
import { getRandomNumber } from '@/shared/_utils'
import ToastPortal from '../ToastPortal'
import useSafetyContext, { createSateyContext } from '@/hooks/useSafetyContext'
import { TOAST_TIMEOUT } from '../toastBox.css'

type Value = {
  showToast: ({ variety, desc }: Pick<Toast, 'desc' | 'variety'>) => void
}
const ToastContext = createSateyContext<Value>('ToastContext')

function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<Array<Toast>>([])

  const clear = (id: number) => {
    const timeout = setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
      clearTimeout(timeout)
    }, TOAST_TIMEOUT)
  }

  const addToast = useCallback(
    ({ variety, desc }: Pick<Toast, 'desc' | 'variety'>) => {
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
    },
    []
  )

  const values = useMemo(
    () => ({
      showToast: addToast,
    }),
    [addToast]
  )

  return (
    <ToastContext.Provider value={values}>
      {children}
      <ToastPortal toasts={toasts} />
    </ToastContext.Provider>
  )
}

export default ToastProvider

export const useToastContext = () => useSafetyContext({ context: ToastContext })
