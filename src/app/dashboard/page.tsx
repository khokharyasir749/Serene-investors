import type { Metadata } from 'next'
import { DashboardPage } from '@/views/DashboardPage'

export const metadata: Metadata = {
  title: 'Investor Dashboard & Portfolio | SERENE INVESTORS',
  description: 'View your real-time fractional property holdings, quarterly rental dividend history, and tax documentation.',
}

export default function Page() {
  return <DashboardPage />
}
