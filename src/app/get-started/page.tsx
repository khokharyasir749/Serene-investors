'use client'

import { Suspense } from 'react'
import { GetStartedPage } from '@/views/GetStartedPage'

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <GetStartedPage />
    </Suspense>
  )
}
