'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Compass,
  Coins,
  TrendingUp,
  ArrowRightLeft,
  Search,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import { PhoneFrame } from '@/components/ui/mockups/PhoneFrame'

type StepId = 'browse' | 'invest' | 'earn' | 'sell'

type StepItem = {
  id: StepId
  stepNumber: string
  label: string
  headline: string
  description: string
  icon: typeof Compass
}

const STEPS: StepItem[] = [
  {
    id: 'browse',
    stepNumber: '01',
    label: 'Browse',
    headline: 'Browse curated prime assets',
    description: 'Access prime residential and commercial real estate across multiple high-growth UK markets.',
    icon: Compass,
  },
  {
    id: 'invest',
    stepNumber: '02',
    label: 'Invest',
    headline: 'Own fractional equity from £500',
    description: 'Own a piece of the institutional properties you love, from only £500 with digital Land Registry deeds.',
    icon: Coins,
  },
  {
    id: 'earn',
    stepNumber: '03',
    label: 'Earn',
    headline: 'Enjoy passive rental dividends',
    description: 'Enjoy regular passive income with zero landlord hassle — paid directly to your Serene wallet every quarter.',
    icon: TrendingUp,
  },
  {
    id: 'sell',
    stepNumber: '04',
    label: 'Sell',
    headline: 'From entry to exit — seamless liquidity',
    description: 'From entry to exit — enjoy quarterly liquidity windows to exit your fractional shares when you need capital.',
    icon: ArrowRightLeft,
  },
]

export function PhoneJourneySection() {
  const [activeStep, setActiveStep] = useState<StepId>('browse')
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-advance step every 6s unless hovered
  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(() => {
      setActiveStep((current) => {
        const index = STEPS.findIndex((s) => s.id === current)
        const nextIndex = (index + 1) % STEPS.length
        return STEPS[nextIndex].id
      })
    }, 6000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-bg-warm py-20 md:py-28 lg:py-32 border-b border-ink/[0.08]"
      aria-label="How Serene Investors Works"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles size={13} className="text-primary" />
            HOW IT WORKS
          </p>
          <h2 className="mt-4 text-[clamp(2.15rem,4vw,3.6rem)] font-bold leading-[1.12] tracking-tight text-ink text-balance">
            Build a diversified real estate portfolio easily from your phone
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg max-w-xl mx-auto">
            From discovering prime UK assets to automated dividend deposits and transparent liquidity, all in a few taps.
          </p>
        </div>

        {/* 2-Column Interactive Journey Stage */}
        <div className="mt-14 lg:mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left Column: Interactive 4-Step Narrative */}
          <div className="lg:col-span-6 space-y-4">
            {STEPS.map((step) => {
              const isActive = activeStep === step.id
              const Icon = step.icon

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  aria-pressed={isActive}
                  className={`group relative flex w-full text-left rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'border-primary/30 bg-surface shadow-lg ring-1 ring-primary/20'
                      : 'border-ink/[0.06] bg-surface/60 hover:bg-surface hover:border-ink/15 hover:shadow-xs'
                  }`}
                >
                  {/* Left Active Indicator Strip */}
                  {isActive && (
                    <span
                      className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-primary animate-pulse"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-start gap-4 sm:gap-5 w-full">
                    {/* Step Number & Icon */}
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? 'bg-primary text-white shadow-xs'
                          : 'bg-primary/10 text-primary group-hover:bg-primary/15'
                      }`}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </div>

                    {/* Step Copy */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-primary tracking-wide">
                          STEP {step.stepNumber}
                        </span>
                        <span className="text-xs text-muted/60">•</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                          {step.label}
                        </span>
                      </div>
                      <h3
                        className={`mt-1 text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200 ${
                          isActive ? 'text-ink' : 'text-ink/80 group-hover:text-ink'
                        }`}
                      >
                        {step.headline}
                      </h3>
                      <p
                        className={`mt-1.5 text-sm sm:text-[0.9375rem] leading-relaxed transition-colors duration-200 ${
                          isActive ? 'text-muted' : 'text-muted/80'
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Active Progress Bar (6s countdown) */}
                      {isActive && (
                        <div className="mt-3.5 h-1 w-full overflow-hidden rounded-full bg-primary/15">
                          <div
                            key={step.id}
                            className="h-full bg-primary rounded-full motion-safe:animate-[grow-width_6s_linear]"
                            style={{
                              animation: !isPaused ? 'grow-width 6s linear' : 'none',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Dynamic Mobile Phone Stage */}
          <div className="lg:col-span-6 flex justify-center">
            {/* Green Ambient Card Container matching Stake Screenshot */}
            <div className="relative w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-[#2f5540] via-[#244534] to-[#1c3629] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden border border-emerald-900/30">
              {/* Subtle background glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-emerald-400/15 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-20 -bottom-20 size-72 rounded-full bg-emerald-400/10 blur-3xl"
                aria-hidden="true"
              />

              {/* Dynamic Step Header in Phone Container */}
              <div className="mb-4 flex items-center justify-between text-white/90">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-300">
                  LIVE INTERFACE • STAGE {STEPS.find((s) => s.id === activeStep)?.stepNumber}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/75">
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                  Real-time
                </span>
              </div>

              {/* Realistic Phone Frame with Active Screen */}
              <div className="relative mx-auto transition-all duration-500 ease-out">
                <PhoneFrame className="w-[min(100%,320px)] sm:w-[330px] shadow-2xl">
                  {/* Step 1: Browse Screen */}
                  {activeStep === 'browse' && (
                    <div className="min-h-[460px] bg-bg px-3.5 py-3 text-ink flex flex-col gap-3">
                      {/* Search & Filter Pill */}
                      <div className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2 border border-ink/[0.08] shadow-2xs">
                        <Search size={14} className="text-muted shrink-0" />
                        <span className="text-xs text-muted font-medium">Search London, Mayfair...</span>
                      </div>

                      {/* Filter Chips */}
                      <div className="flex gap-1.5 overflow-x-auto text-[11px] pb-1 scrollbar-none">
                        <span className="rounded-full bg-primary px-2.5 py-1 font-semibold text-white">All (42)</span>
                        <span className="rounded-full bg-surface px-2.5 py-1 text-muted border border-ink/[0.08]">Mayfair</span>
                        <span className="rounded-full bg-surface px-2.5 py-1 text-muted border border-ink/[0.08]">Yield &gt; 7%</span>
                      </div>

                      {/* Primary Property Card */}
                      <div className="overflow-hidden rounded-2xl bg-surface border border-ink/[0.08] shadow-xs">
                        <div className="relative h-28 w-full">
                          <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                            alt="The Mayfair Core Portfolio"
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute left-2.5 top-2.5 rounded-full bg-emerald-800/90 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
                            Available
                          </span>
                          <span className="absolute right-2.5 top-2.5 rounded-full bg-surface/90 px-2 py-0.5 text-[10px] font-bold text-ink backdrop-blur-xs">
                            7.4% Net Yield
                          </span>
                        </div>
                        <div className="p-3">
                          <h4 className="text-xs font-bold text-ink">The Mayfair Core Portfolio</h4>
                          <p className="text-[10px] text-muted">Mayfair, London W1 • From £500</p>
                          <div className="mt-2 flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-primary">£1,236,002</span>
                            <span className="text-emerald-700 font-medium">92% Funded</span>
                          </div>
                          <div className="mt-1 h-1.5 w-full rounded-full bg-ink/[0.08]">
                            <div className="h-full w-[92%] rounded-full bg-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Secondary Property Card */}
                      <div className="flex items-center gap-2.5 rounded-xl bg-surface p-2.5 border border-ink/[0.08]">
                        <img
                          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80"
                          alt="Cedar Court"
                          className="size-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-bold text-ink truncate">Cedar Court, Manchester</p>
                          <p className="text-[10px] text-muted">6.8% Target Yield • £500 Min</p>
                          <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">88% Allocated</p>
                        </div>
                        <ArrowUpRight size={14} className="text-muted shrink-0" />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Invest Screen */}
                  {activeStep === 'invest' && (
                    <div className="min-h-[460px] bg-bg px-3.5 py-3 text-ink flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Investment Header */}
                        <div className="rounded-xl bg-surface p-3 border border-ink/[0.08]">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                            Selected Opportunity
                          </span>
                          <p className="text-xs font-bold text-ink mt-0.5">The Mayfair Core Portfolio</p>
                          <p className="text-[11px] text-primary font-medium">Fractional Unit Price: £50.00</p>
                        </div>

                        {/* Amount Box */}
                        <div className="rounded-2xl bg-surface p-3.5 border border-primary/30 text-center shadow-xs">
                          <span className="text-[10px] uppercase font-semibold text-muted">Investment Amount</span>
                          <p className="text-2xl font-extrabold text-ink tracking-tight mt-0.5">£500.00</p>
                          <span className="inline-block mt-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                            = 10 Fractional Shares
                          </span>
                        </div>

                        {/* Financial Projection Box */}
                        <div className="rounded-xl bg-primary/5 p-3 border border-primary/20 space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted text-[11px]">Est. Annual Dividend</span>
                            <span className="font-bold text-emerald-800">£37.00 / yr</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted text-[11px]">5-Yr Projected Return</span>
                            <span className="font-bold text-primary">£712.50 (+42.5%)</span>
                          </div>
                        </div>

                        {/* Trust Assurance */}
                        <div className="flex items-center gap-2 text-[10px] text-muted">
                          <ShieldCheck size={14} className="text-primary shrink-0" />
                          <span>FCA Tier-1 Regulated Custody • Digital Deed</span>
                        </div>
                      </div>

                      {/* Primary CTA */}
                      <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-bold text-white shadow-md active:scale-95"
                      >
                        <CheckCircle2 size={14} />
                        Confirm &amp; Secure Shares
                      </button>
                    </div>
                  )}

                  {/* Step 3: Earn Screen */}
                  {activeStep === 'earn' && (
                    <div className="min-h-[460px] bg-bg px-3.5 py-3 text-ink flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Balance Card */}
                        <div className="rounded-2xl bg-gradient-to-br from-[#244534] to-[#1a3327] p-3.5 text-white shadow-sm">
                          <p className="text-[10px] uppercase tracking-wider text-emerald-200">Total Rental Income Earned</p>
                          <p className="text-2xl font-extrabold tracking-tight mt-0.5">£3,840.50</p>
                          <div className="mt-2 flex items-center justify-between text-[10px] text-emerald-200">
                            <span>Next distribution</span>
                            <span className="font-bold text-white">15 Oct 2026 (9 days)</span>
                          </div>
                        </div>

                        {/* Recent Deposit Pill */}
                        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-2.5 border border-emerald-200 text-xs text-emerald-900">
                          <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                          <span className="text-[11px] font-medium">+£380.00 Dividend Deposited to Wallet</span>
                        </div>

                        {/* Distributions List */}
                        <div className="rounded-xl bg-surface p-3 border border-ink/[0.08] space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted">Recent Payouts</span>
                          <div className="flex items-center justify-between border-b border-ink/[0.06] pb-2 text-[11px]">
                            <div>
                              <p className="font-bold text-ink">Mayfair Core — Q3 Rent</p>
                              <p className="text-[10px] text-muted">Direct Wallet Transfer</p>
                            </div>
                            <span className="font-bold text-emerald-700">+£245.00</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px]">
                            <div>
                              <p className="font-bold text-ink">Cedar Court — Monthly</p>
                              <p className="text-[10px] text-muted">Direct Wallet Transfer</p>
                            </div>
                            <span className="font-bold text-emerald-700">+£135.50</span>
                          </div>
                        </div>
                      </div>

                      {/* Auto-Reinvest Toggle Pill */}
                      <div className="flex items-center justify-between rounded-xl bg-surface p-2.5 border border-ink/[0.08] text-xs">
                        <span className="text-[11px] font-medium text-ink">Auto-Reinvest Earnings</span>
                        <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">ON</span>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Sell Screen */}
                  {activeStep === 'sell' && (
                    <div className="min-h-[460px] bg-bg px-3.5 py-3 text-ink flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Secondary Market Status */}
                        <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2 border border-emerald-200 text-xs">
                          <span className="font-semibold text-emerald-900 text-[11px]">Secondary Market Window</span>
                          <span className="flex items-center gap-1 font-bold text-emerald-700 text-[11px]">
                            <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            Live
                          </span>
                        </div>

                        {/* Exit Asset Details */}
                        <div className="rounded-2xl bg-surface p-3.5 border border-ink/[0.08] shadow-xs">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted">Exiting Asset</span>
                          <p className="text-xs font-bold text-ink mt-0.5">The Mayfair Core Portfolio</p>
                          <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                            <div className="rounded-lg bg-bg p-2">
                              <span className="text-[10px] text-muted">Shares to Sell</span>
                              <p className="font-bold text-ink">25 Shares</p>
                            </div>
                            <div className="rounded-lg bg-bg p-2">
                              <span className="text-[10px] text-muted">Current Value</span>
                              <p className="font-bold text-emerald-700">£54.20 (+8.4%)</p>
                            </div>
                          </div>
                        </div>

                        {/* Proceeds Box */}
                        <div className="rounded-xl bg-surface p-3 border border-ink/[0.08] text-xs space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-muted text-[11px]">Gross Proceeds</span>
                            <span className="font-bold text-ink">£1,355.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted text-[11px]">Platform Exit Fee</span>
                            <span className="font-bold text-emerald-700">£0.00 (0%)</span>
                          </div>
                          <div className="flex justify-between border-t border-ink/[0.06] pt-1.5 font-bold">
                            <span className="text-ink">Net Cash to Wallet</span>
                            <span className="text-primary text-sm">£1,355.00</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] text-muted">
                          <CheckCircle2 size={13} className="text-primary shrink-0" />
                          <span>Buyer matched • Settlement in 24 hours</span>
                        </div>
                      </div>

                      {/* Liquidate CTA */}
                      <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-2.5 text-xs font-bold text-white shadow-md active:scale-95 hover:bg-black"
                      >
                        <ArrowRightLeft size={14} />
                        Liquidate &amp; Cash Out
                      </button>
                    </div>
                  )}
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
