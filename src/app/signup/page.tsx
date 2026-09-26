'use client'

import { Suspense } from 'react'
import { SignupPage } from '@/views/SignupPage'

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <SignupPage />
    </Suspense>
  )
}
