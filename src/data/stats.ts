import type { StatItem } from '@/types'

export const platformStatsIntro = {
  eyebrow: 'The Platform',
  heading: 'Institutional property syndication, built for clarity.',
  body: 'A consolidated view of our prime real estate portfolio, institutional syndicates, and investor distributions.',
  sampleLabel: 'Audited Platform Metrics',
} as const

export const platformStats: StatItem[] = [
  {
    id: 'value',
    value: '£184M',
    amount: 184,
    prefix: '£',
    suffix: 'M',
    label: 'Portfolio real estate valuation',
  },
  {
    id: 'properties',
    value: '126',
    amount: 126,
    label: 'Prime properties held',
  },
  {
    id: 'investors',
    value: '8,420+',
    amount: 8420,
    suffix: '+',
    grouping: true,
    label: 'Active accredited investors',
  },
  {
    id: 'distributions',
    value: '£12.6M',
    amount: 12.6,
    prefix: '£',
    suffix: 'M',
    decimals: 1,
    label: 'Total dividends distributed',
  },
]

export const returnStats: StatItem[] = [
  { id: 'rent-paid', value: '£4.2M', label: 'Rental income distributed to date' },
  { id: 'avg-yield', value: '7.4%', label: 'Average historical net yield' },
  { id: 'funded', value: '126', label: 'Completed institutional syndications' },
  { id: 'exits', value: '18', label: 'Profitable asset realizations' },
]
