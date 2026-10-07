import type { Testimonial } from '@/types'

export const testimonialsIntro = {
  eyebrow: 'SUCCESS STORIES',
  heading: 'Hear from our global investors',
  body: 'Real stories from investors worldwide building passive income with Stake.',
  sampleLabel: 'Global investors',
} as const

export const testimonials: Testimonial[] = [
  {
    id: 'venus',
    name: 'Venus',
    role: 'Stake Investor',
    location: 'Dubai',
    quote:
      'I really enjoyed using the app! Being able to actually own a stake in a property with just a button, literally like you’re shopping for a property, that’s a really cool concept honestly.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Portrait of Venus, Stake Investor',
  },
  {
    id: 'david',
    name: 'David',
    role: 'Stake Investor',
    location: 'United Kingdom',
    quote:
      'Solving that problem of not necessarily having to explore too many different investment opportunities, while still having the opportunity to invest with a couple of clicks into an asset that I’m really interested in.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Portrait of David, Stake Investor',
  },
  {
    id: 'dan',
    name: 'Dan',
    role: 'Stake Investor',
    location: 'Saudi Arabia',
    quote:
      'Liquidity in property is sometimes tough, but with the Stake exit windows it just makes life so much easier if you want to sell certain stakes – you just put them on the secondary market.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Portrait of Dan, Stake Investor',
  },
  {
    id: 'muhammad-waqas',
    name: 'Muhammad Waqas Ahmad',
    role: 'Stake Investor',
    location: 'UAE',
    quote:
      'I started investing in Stake and the platform is very easy to understand and trade. The transparency and regular rent distributions make it the best platform in the region.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Portrait of Muhammad Waqas Ahmad, Stake Investor',
  },
]
