import type { HeroCopy, HeroVisualContent } from '@/types'

export const heroCopy: HeroCopy = {
  eyebrow: 'Fractional Private Wealth',
  headline: 'Own a measured share of prime real estate.',
  body: 'Access curated prime residential and commercial syndications with transparent fractional ownership and quarterly dividends.',
  primary: { label: 'Get started', href: '/get-started' },
  secondary: { label: 'Browse properties', href: '/properties' },
}

export const heroVisual: HeroVisualContent = {
  image: {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&h=2500&q=80',
    alt: 'Pale residential towers rising above a planted courtyard',
  },
  listing: {
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&h=560&q=80',
    imageAlt: 'Closer view of the same residential towers',
    place: 'Courtyard Residences',
    type: 'Prime Residential',
    yieldLabel: 'Target yield 8.4%',
    priceLabel: 'From £5,000',
    sampleLabel: 'Prime London SW1',
  },
  yieldPill: {
    label: '8.4% Target Net Yield',
  },
  receipt: {
    title: 'Distribution posted',
    amount: '£270',
    detail: 'Cedar Court',
    sampleLabel: 'Quarterly Dividend',
  },
}
