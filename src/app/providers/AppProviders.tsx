'use client'

import type { ReactNode } from 'react'
import { LenisProvider } from './LenisProvider'

type Props = {
  children: ReactNode
}

export function AppProviders({ children }: Props) {
  return <LenisProvider>{children}</LenisProvider>
}
