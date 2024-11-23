import React, { PropsWithChildren } from 'react'

import 'prismjs/themes/prism-tomorrow.css'
import * as style from './style/customStyleProvider.css'
const CustomStyleProvider = ({ children }: PropsWithChildren) => {
  return <div className={style.base}>{children}</div>
}

export default CustomStyleProvider
