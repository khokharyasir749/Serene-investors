import { AppDownloadSection } from '@/components/sections/home/AppDownloadSection'
import { BackersSection } from '@/components/sections/home/BackersSection'
import { FeaturedHoldingsSection } from '@/components/sections/home/FeaturedHoldingsSection'
import { StakeHero } from '@/components/hero'
import { PhoneJourneySection } from '@/components/sections/home/PhoneJourneySection'
import { ProductModulesSection } from '@/components/sections/home/ProductModulesSection'
import { PlatformStatsSection } from '@/components/sections/home/PlatformStatsSection'
import { PressSection } from '@/components/sections/home/PressSection'
import { RewardsSection } from '@/components/sections/home/RewardsSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { TrustSection } from '@/components/sections/home/TrustSection'
import { ValueStorySection } from '@/components/sections/home/ValueStorySection'
import { MarketTickerBand } from '@/components/home/MarketTickerBand'
import { InvestmentYieldCalculator } from '@/components/calculator/InvestmentYieldCalculator'
import {
  featuredProperties,
  platformStats,
  pressLogos,
  rewards,
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

      {/* Stake Section 1: "Easily from your phone" 4-Stage Interactive Journey */}
      <PhoneJourneySection />

      {/* Stake Section 2: Two-Column Product Modules (Properties vs Funds) */}
      <ProductModulesSection />

      {/* Live Financial & Indicator Ticker */}
      <MarketTickerBand />

      {/* Curated Holdings & Institutional Opportunities */}
      <FeaturedHoldingsSection properties={featuredProperties} />

      {/* Platform Quantitative Traction */}
      <PlatformStatsSection stats={platformStats} />

      {/* Real-time Interactive Yield Modeling */}
      <InvestmentYieldCalculator />

      {/* Investor Tiers & Benefits */}
      <RewardsSection items={rewards} />

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
