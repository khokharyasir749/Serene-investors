import { FeaturedHoldingsSection } from '@/components/sections/home/FeaturedHoldingsSection'
import { StakeHero } from '@/components/hero'
import { InteractiveJourney } from '@/components/interactive-journey'
import { DualProductBento } from '@/components/products'
import { HowYouEarn } from '@/components/products'
import { PlatformStatsSection } from '@/components/sections/home/PlatformStatsSection'
import { PressSection } from '@/components/sections/home/PressSection'
import { RewardsTiers } from '@/components/rewards'
import { SecurityRegulation } from '@/components/trust'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { StakeFooterComplete } from '@/components/footer'
import { MarketTickerBand } from '@/components/home/MarketTickerBand'
import { InvestmentYieldCalculator } from '@/components/calculator/InvestmentYieldCalculator'
import {
  featuredProperties,
  platformStats,
  pressLogos,
  site,
  testimonials,
} from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HomePage() {
  usePageMeta(site.name, site.disclaimer)

  return (
    <>
      {/* 1. Stake Hero Architecture with Layered Realistic Mobile Mockup */}
      <StakeHero />

      {/* 2. Monotone Media / Publication Trust Strip */}
      <PressSection logos={pressLogos} />

      {/* 3. Stake/Serene Mobile Showcase 1: "Easily from your phone" 4-Stage Interactive Journey */}
      <InteractiveJourney />

      {/* 4. Stake Signature Bento: Properties vs Funds Bento Showcase with Pre-Header 4 Stats Bar */}
      <DualProductBento />

      {/* 5. Stake/Serene Mobile Showcase 2: "So, how do I make money?" (3 Stacked Horizontal Rows) */}
      <HowYouEarn />

      {/* 6. Live Financial & Indicator Ticker */}
      <MarketTickerBand />

      {/* 7. Curated Holdings & Institutional Opportunities */}
      <FeaturedHoldingsSection properties={featuredProperties} />

      {/* 8. Platform Quantitative Traction */}
      <PlatformStatsSection stats={platformStats} />

      {/* 9. Real-time Interactive Yield Modeling */}
      <InvestmentYieldCalculator />

      {/* 10. Stake/Serene Mobile Showcase 3: Investor Tiers & Benefits (4 Smartphone App Screens) */}
      <RewardsTiers />

      {/* 11. Stake Signature Security: "Safety never sleeps - Robustly regulated" + DFSA & CMA + 13 Backers */}
      <SecurityRegulation />

      {/* 12. Client Testimonials */}
      <TestimonialsSection items={testimonials} />

      {/* 13. Stake Bottom App CTA Banner (Tilted Phone Mockup) + Compliant Dark Footer */}
      <StakeFooterComplete />
    </>
  )
}
