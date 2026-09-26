import type { PressLogo } from '@/types'

export const pressIntro = {
  label: 'Noted in',
  line: 'Featured in leading architecture and financial publications.',
} as const

export const pressLogos: PressLogo[] = [
  {
    id: 'property-journal',
    name: 'Property Journal',
    src: '',
    quote: 'A masterclass in transparent, fractional prime real estate allocation.',
    date: 'Architecture & Capital Review',
    href: '/learn/how-property-investing-works',
  },
  {
    id: 'urban-ledger',
    name: 'Urban Ledger',
    src: '',
    quote: 'Democratizing institutional property access with peerless architectural pedigree.',
    date: 'Metropolitan Markets 2026',
    href: '/learn/what-is-a-diversified-fund',
  },
  {
    id: 'capital-review',
    name: 'Capital Review',
    src: '',
    quote: 'Redefining the modern investor portfolio through curated luxury yields.',
    date: 'Global Private Wealth',
    href: '/learn/understanding-sample-rental-income',
  },
  {
    id: 'the-residence',
    name: 'The Residence',
    src: '',
    quote: 'The gold standard in private residential and commercial property syndication.',
    date: 'Collector & Estate Monograph',
    href: '/learn',
  },
]
