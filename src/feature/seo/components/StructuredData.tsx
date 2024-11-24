import React from 'react'

import { Thing, WithContext } from 'schema-dts'

/**
 * @link {https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld}
 */
interface Props<T extends Thing> {
  data: WithContext<T>
}
function StructuredData<T extends Thing>({ data }: Props<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

export default StructuredData
