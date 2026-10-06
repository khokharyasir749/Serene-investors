import { AppDownloadSection } from '@/components/sections/home/AppDownloadSection'
import { BackersSection } from '@/components/sections/home/BackersSection'
import { FeaturedHoldingsSection } from '@/components/sections/home/FeaturedHoldingsSection'
import { StakeHero } from '@/components/hero'
import { InteractiveJourney } from '@/components/interactive-journey'
import { ProductModulesSection } from '@/components/sections/home/ProductModulesSection'
import { HowYouEarn } from '@/components/products'
import { PlatformStatsSection } from '@/components/sections/home/PlatformStatsSection'
import { PressSection } from '@/components/sections/home/PressSection'
import { RewardsTiers } from '@/components/rewards'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { TrustSection } from '@/components/sections/home/TrustSection'
import { ValueStorySection } from '@/components/sections/home/ValueStorySection'
import { MarketTickerBand } from '@/components/home/MarketTickerBand'
import { InvestmentYieldCalculator } from '@/components/calculator/InvestmentYieldCalculator'
import {
  featuredProperties,
  platformStats,
  pressLogos,
  site,
  testimonials,
  trustItems,
} from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HomePage() {
  usePageMeta(site.name, site.disclaimer)

  return (
    <>
      {/* Stake Hero Architecture with Layered Realistic Mobile Mockup */}
      <StakeHero />

      {/* Monotone Media / Publication Trust Strip */}
      <PressSection logos={pressLogos} />

      {/* Stake/Serene Mobile Showcase 1: "Easily from your phone" 4-Stage Interactive Journey */}
      <InteractiveJourney />

      {/* Stake Section 2: Two-Column Product Modules (Properties vs Funds) */}
      <ProductModulesSection />

      {/* Stake/Serene Mobile Showcase 2: "So, how do I make money?" (3 Stacked Horizontal Rows) */}
      <HowYouEarn />

      {/* Live Financial & Indicator Ticker */}
      <MarketTickerBand />

      {/* Curated Holdings & Institutional Opportunities */}
      <FeaturedHoldingsSection properties={featuredProperties} />

      {/* Platform Quantitative Traction */}
      <PlatformStatsSection stats={platformStats} />

      {/* Real-time Interactive Yield Modeling */}
      <InvestmentYieldCalculator />

      {/* Stake/Serene Mobile Showcase 3: Investor Tiers & Benefits (4 Smartphone App Screens) */}
      <RewardsTiers />

      {/* Narrative & Institutional Value Pillars */}
      <ValueStorySection />

      {/* FCA Custody, Regulatory & Security Pillars */}
      <TrustSection items={trustItems} />

      {/* Institutional Backers & Real Estate Consortiums */}
      <BackersSection />

      {/* Client Testimonials */}
      <TestimonialsSection items={testimonials} />

      {/* Mobile App Download Footprint */}
      <AppDownloadSection />
    </>
  )
}
