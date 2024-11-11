import React, { PropsWithChildren } from 'react'

import * as style from './style/customStyleProvider.css'
const CustomStyleProvider = ({ children }: PropsWithChildren) => {
  return <div className={style.base}>{children}</div>
}

export default CustomStyleProvider
