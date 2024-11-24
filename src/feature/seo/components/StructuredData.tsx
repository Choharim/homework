import React from 'react'

import Head from 'next/head'

import { Thing, WithContext } from 'schema-dts'

interface Props<T extends Thing> {
  data: WithContext<T>
}
function StructuredData<T extends Thing>({ data }: Props<T>) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
    </Head>
  )
}

export default StructuredData
