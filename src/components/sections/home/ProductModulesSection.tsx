'use client'

import { Building2, Layers, Play, CheckCircle2 } from 'lucide-react'
import { Link } from '@/components/ui/Link'
import { PhoneFrame } from '@/components/ui/mockups/PhoneFrame'

const STATS = [
  { value: '2M+', label: 'Registered users' },
  { value: '£1.5B+', label: 'Property transactions' },
  { value: '200+', label: 'User nationalities' },
  { value: '£236M+', label: 'Total distributed' },
]

export function ProductModulesSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-bg py-20 md:py-28 lg:py-32 border-b border-ink/[0.08]"
      aria-label="Investment Products"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8">
        {/* Centered Header & 4 Key Stats */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            INVESTMENT PRODUCTS
          </p>
          <h2 className="mt-3 text-[clamp(2.15rem,4vw,3.6rem)] font-bold leading-[1.12] tracking-tight text-ink text-balance">
            Build a global and diversified real estate portfolio
          </h2>

          {/* 4 Key Stats Row */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 border-y border-ink/[0.08] py-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-[0.8125rem] text-muted font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-Side Large Rounded Cards (Dual columns) */}
        <div className="mt-14 lg:mt-18 grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
          {/* Card 1: Properties */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-ink/[0.08] bg-surface p-7 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/25">
            <div>
              {/* Icon & Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 text-xs font-semibold text-emerald-900">
                <Building2 size={14} className="text-primary" />
                <span>Properties</span>
              </div>

              {/* Headline & Description */}
              <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Invest in properties in prime areas
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted max-w-[42ch]">
                Own shares of individual properties with high-yield and appreciation potential, verified on the UK Land Registry.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/properties"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent active:scale-95"
                >
                  Learn more
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink transition-all hover:bg-bg-warm active:scale-95"
                >
                  <Play size={13} className="text-primary fill-primary" />
                  <span>Watch how it works</span>
                </Link>
              </div>
            </div>

            {/* Floating Phone Visual (Peeking from bottom of card) */}
            <div className="mt-10 pt-4 flex justify-center overflow-hidden -mb-10 sm:-mb-14">
              <div className="w-[min(100%,320px)] sm:w-[330px] transition-transform duration-500 ease-out group-hover:-translate-y-3">
                <PhoneFrame className="shadow-2xl" showHomeIndicator={false}>
                  <div className="bg-bg p-3.5 space-y-3 text-ink">
                    {/* Phone Header */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-ink">Available Properties</span>
                      <span className="text-[10px] text-primary font-semibold">View All &rarr;</span>
                    </div>

                    {/* Property Card 1: Park Islands */}
                    <div className="overflow-hidden rounded-xl bg-surface border border-ink/[0.08] shadow-xs">
                      <div className="relative h-24 w-full">
                        <img
                          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                          alt="Park Islands"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-white">
                          7.2% Net Yield
                        </span>
                        <span className="absolute right-2 top-2 rounded-full bg-surface/90 px-2 py-0.5 text-[9px] font-semibold text-ink">
                          From £500
                        </span>
                      </div>
                      <div className="p-2.5">
                        <p className="text-[11px] font-bold text-ink">Park Islands, Canary Wharf</p>
                        <p className="text-[10px] text-muted">London E14 • 94% Funded</p>
                        <div className="mt-1.5 h-1 w-full rounded-full bg-ink/[0.08]">
                          <div className="h-full w-[94%] rounded-full bg-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Property Card 2: Boulevard Point */}
                    <div className="overflow-hidden rounded-xl bg-surface border border-ink/[0.08] shadow-xs">
                      <div className="relative h-20 w-full">
                        <img
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                          alt="Boulevard Point"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-emerald-800 px-2 py-0.5 text-[9px] font-bold text-white">
                          Available
                        </span>
                        <span className="absolute right-2 top-2 rounded-full bg-surface/90 px-2 py-0.5 text-[9px] font-semibold text-ink">
                          6.9% Target Yield
                        </span>
                      </div>
                      <div className="p-2">
                        <p className="text-[11px] font-bold text-ink">Boulevard Point, Mayfair</p>
                        <p className="text-[10px] text-muted">London W1 • Prime Residential</p>
                      </div>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* Card 2: Funds */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-ink/[0.08] bg-surface p-7 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/25">
            <div>
              {/* Icon & Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
                <Layers size={14} className="text-primary" />
                <span>Funds</span>
              </div>

              {/* Headline & Description */}
              <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Invest in private single-asset real estate funds
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted max-w-[42ch]">
                Own units of exclusive commercial, residential and mixed-use funds managed by institutional asset operators.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/funds"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent active:scale-95"
                >
                  Learn more
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink transition-all hover:bg-bg-warm active:scale-95"
                >
                  <Play size={13} className="text-primary fill-primary" />
                  <span>Watch how it works</span>
                </Link>
              </div>
            </div>

            {/* Floating Phone Visual (Peeking from bottom of card) */}
            <div className="mt-10 pt-4 flex justify-center overflow-hidden -mb-10 sm:-mb-14">
              <div className="w-[min(100%,320px)] sm:w-[330px] transition-transform duration-500 ease-out group-hover:-translate-y-3">
                <PhoneFrame className="shadow-2xl" showHomeIndicator={false}>
                  <div className="bg-bg p-3.5 space-y-3 text-ink">
                    {/* Fund Highlight Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-[#244534] to-[#183124] p-3.5 text-white shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-semibold text-emerald-200">Fund Growth</span>
                        <span className="rounded-full bg-emerald-500/25 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                          +41.4%
                        </span>
                      </div>
                      <p className="text-xl font-extrabold tracking-tight mt-1">£24,800.00</p>
                      <p className="text-[10px] text-emerald-200 mt-0.5">Total Return Since Inception</p>

                      {/* Mini Area Chart SVG */}
                      <div className="mt-2.5 h-10 w-full">
                        <svg viewBox="0 0 100 30" className="h-full w-full overflow-visible">
                          <path
                            d="M0 25 Q 25 22, 45 15 T 75 10 T 100 4"
                            fill="none"
                            stroke="#34d399"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M0 25 Q 25 22, 45 15 T 75 10 T 100 4 L 100 30 L 0 30 Z"
                            fill="rgba(52, 211, 153, 0.15)"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Underlying Fund Assets List */}
                    <div className="rounded-xl bg-surface p-2.5 border border-ink/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <div>
                          <p className="font-bold text-ink">Urban Living Fund</p>
                          <p className="text-[9.5px] text-muted">12 Residential Properties</p>
                        </div>
                        <span className="font-bold text-primary">8.8% IRR</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-ink/[0.06] pt-1.5 text-[11px]">
                        <div>
                          <p className="font-bold text-ink">UK Logistics Core</p>
                          <p className="text-[9.5px] text-muted">Commercial Warehousing</p>
                        </div>
                        <span className="font-bold text-primary">7.9% IRR</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-muted">
                      <CheckCircle2 size={13} className="text-primary shrink-0" />
                      <span>Quarterly liquidity windows &amp; automated distributions</span>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
