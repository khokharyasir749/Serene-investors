import { StakeHero } from '@/components/hero'
import { PressSection } from '@/components/sections/home/PressSection'
import { InteractiveJourney } from '@/components/interactive-journey'
import { DualProductBento } from '@/components/products'
import { HowYouEarn } from '@/components/products'
import { RewardsTiers } from '@/components/rewards'
import { SecurityRegulation } from '@/components/trust'
import { StakeFooterComplete } from '@/components/footer'
import { pressLogos, site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HomePage() {
  usePageMeta(site.name, site.disclaimer)

  return (
    <>
      {/* 1. Hero Architecture with Layered Realistic Mobile Mockups & Trust Pills */}
      <StakeHero />

      {/* 2. Media / Publication Trust Strip (TechCrunch, Forbes, TIME, CNN, Bloomberg, Arab News) */}
      <PressSection logos={pressLogos} />

      {/* 3. Interactive Journey: "Build a diversified real estate portfolio easily from your phone" */}
      <InteractiveJourney />

      {/* 4. Products Bento: 2M+ stats bar, Properties vs Funds showcase */}
      <DualProductBento />

      {/* 5. How You Earn: "So, how do I make money?" - 3 alternating phone showcase rows */}
      <HowYouEarn />

      {/* 6. Rewards Tiers: "The more you invest, the more you earn" - 4 smartphone app screens */}
      <RewardsTiers />

      {/* 7. Security & Regulation: "Safety never sleeps - Robustly regulated" + 13 institutional logos */}
      <SecurityRegulation />

      {/* 8. Bottom App CTA Banner (Emerald card with peeking phone) + Compliant Dark Legal Footer */}
      <StakeFooterComplete />
    </>
  )
}
