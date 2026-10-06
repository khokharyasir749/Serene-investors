'use client'

import { useRef } from 'react'
import { Building2, Coins, Wallet, ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from '@/components/ui/Link'
import { HowStepCard, type HowStepData } from '@/components/cards/HowStepCard'

const steps: HowStepData[] = [
  {
    number: '01',
    title: 'Browse Institutional Assets',
    narrative:
      'Review vetted prime residential and commercial opportunities with comprehensive financial models, valuation reports, and verified legal deeds.',
    subtag: 'Due Diligence Complete',
    icon: <Building2 size={20} strokeWidth={2} />,
  },
  {
    number: '02',
    title: 'Acquire Fractional Shares',
    narrative:
      'Start investing from £500. Secure digital title ownership with transparent pricing and zero hidden transaction fees.',
    subtag: 'Instant Digital Allocation',
    icon: <Coins size={20} strokeWidth={2} />,
  },
  {
    number: '03',
    title: 'Receive Quarterly Cash Dividends',
    narrative:
      'Collect passive rental income directly into your investor wallet with quarterly distributions and capital appreciation on exit.',
    subtag: 'Automated Bank Payouts',
    icon: <Wallet size={20} strokeWidth={2} />,
  },
]

export function HowItWorksSection() {
  const rootRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={rootRef}
      id="how-it-works"
      className="relative overflow-hidden bg-bg-warm py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-10 border-y border-line"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            How It Works
          </p>
          <h2
            id="how-heading"
            className="mt-3 text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-ink text-balance"
          >
            Real estate investing made effortless in 3 simple steps.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From asset discovery to automated quarterly dividend payouts, start building a prime UK property portfolio in minutes.
          </p>
        </div>

        {/* Stake 3-Step Process Sequence */}
        <div className="mt-12 lg:mt-16 relative">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8 relative z-10 items-stretch">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col h-full">
                <HowStepCard step={step} index={index} />
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 size-8 items-center justify-center rounded-full bg-surface border border-ink/[0.1] text-muted shadow-xs pointer-events-none"
                    aria-hidden="true"
                  >
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer / CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-ink/[0.08]">
          <p className="text-xs sm:text-sm text-muted">
            Regulated UK custody • Digital Land Registry deeds • Zero lock-in fees
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors duration-200"
            >
              <span>Explore live opportunities</span>
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
