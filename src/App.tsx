import React, { Suspense } from 'react'
import { SWRConfig } from 'swr'
import { AppRoutes } from './Routes'

function App () {
  return (
    <Suspense fallback={<div>loading......</div>}>
    <SWRConfig value={{ errorRetryCount: 2 }}>
      <AppRoutes />
    </SWRConfig>
    </Suspense>
  )
}

export default App
