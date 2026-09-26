import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AppProviders } from './providers/AppProviders'
import { AppShellClient } from '@/components/layout/AppShellClient'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serene Investors — Fractional Property & Funds Investment',
  description: 'Experience property investment designed for clarity, steady returns, and long-term peace of mind.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <AppShellClient>{children}</AppShellClient>
        </AppProviders>
      </body>
    </html>
  )
}
