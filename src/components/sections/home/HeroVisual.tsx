'use client'

import { Link } from '@/components/ui/Link'
import { ArrowRight, MapPin } from 'lucide-react'

export function HeroVisual() {
  return (
    <div
      data-hero-visual
      className="relative order-2 w-full max-w-[34rem] sm:max-w-[36rem] mx-auto lg:order-2 lg:max-w-none"
    >
      {/* Floating micro-pill badge attached to corner */}
      <div
        data-hero-pill
        className="absolute -top-3.5 right-4 sm:right-6 z-30 flex items-center gap-2 rounded-full border border-emerald-800/15 bg-surface/95 px-3.5 py-1.5 text-xs font-medium text-ink shadow-lg shadow-ink/[0.08] backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
        </span>
        <span className="font-semibold text-emerald-950">Next Payout:</span>
        <span className="text-muted">15 Oct 2026</span>
        <span className="text-ink/30">•</span>
        <span className="font-mono font-bold text-ink">£380.00 avg</span>
      </div>

      {/* Elevated floating luxury preview card matching Stake hero card */}
      <article
        data-hero-card="property"
        className="group relative flex flex-col justify-between rounded-3xl border border-ink/[0.08] bg-surface/95 p-3.5 sm:p-4 shadow-2xl shadow-ink/10 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:border-ink/20 hover:shadow-[0_28px_60px_rgba(24,32,25,0.16)]"
      >
        <Link
          href="/properties/courtyard-residences"
          aria-label="The Mayfair Core Portfolio, London W1. View property opportunity."
          className="flex flex-col h-full rounded-2xl text-inherit no-underline focus-visible:outline-2 focus-visible:outline-primary"
        >
          {/* High-resolution 16:10 aspect ratio image container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-bg-warm">
            <img
              data-hero-image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&h=1000&q=80"
              alt="The Mayfair Core Portfolio, London W1 luxury facade"
              width={1600}
              height={1000}
              fetchPriority="high"
              className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gentle bottom vignette gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Top-Left Badge: Frosted location pill */}
            <div className="absolute left-3 top-3 pointer-events-none z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/[0.08] bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-ink shadow-xs backdrop-blur-md">
                <MapPin size={11} className="text-primary shrink-0" strokeWidth={2.5} />
                <span>Mayfair, London W1</span>
              </span>
            </div>

            {/* Top-Right Badge: Live tag "Open for Allocation" with pulse dot */}
            <div className="absolute right-3 top-3 pointer-events-none z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-800/15 bg-surface/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-900 shadow-xs backdrop-blur-md font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span>Open for Allocation</span>
              </span>
            </div>
          </div>

          {/* Sleek 4px Funding Progress Bar */}
          <div className="mt-3.5 space-y-1.5 px-0.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] font-medium text-ink/75">
                £2,640,000 / £3,000,000 funded (88%)
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-ink/[0.08]">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                style={{ width: '88%' }}
              />
            </div>
          </div>

          {/* Card Header & Information */}
          <div className="mt-3.5 px-0.5">
            <h2 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-primary sm:text-2xl">
              The Mayfair Core Portfolio
            </h2>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              Prime Residential · 14 Luxury Units · Mayfair Conservation Area
            </p>
          </div>

          {/* Institutional 3-Column Split KPI Grid */}
          <div className="my-3.5 grid grid-cols-3 divide-x divide-ink/[0.08] rounded-xl border border-ink/[0.08] bg-bg-warm/40 py-2.5 text-center">
            <div className="px-1.5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">Net Yield</span>
              <span className="mt-0.5 font-mono text-base font-bold tabular-nums text-ink sm:text-lg">7.4%</span>
            </div>
            <div className="px-1.5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">3Y Target Return</span>
              <span className="mt-0.5 font-mono text-base font-bold tabular-nums text-ink sm:text-lg">28.2%</span>
            </div>
            <div className="px-1.5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">Funded</span>
              <span className="mt-0.5 font-mono text-base font-bold tabular-nums text-ink sm:text-lg">88%</span>
            </div>
          </div>

          {/* Card Footer & Micro-Interactions */}
          <div className="mt-auto flex items-center justify-between border-t border-ink/[0.06] pt-3 px-0.5">
            <span className="inline-flex items-center rounded-md bg-bg-warm px-2.5 py-1 text-xs font-medium text-muted">
              From £500 min ticket
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition-colors duration-300 group-hover:text-primary sm:text-sm">
              <span>View opportunity</span>
              <ArrowRight
                size={15}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </div>
        </Link>
      </article>
    </div>
  )
}
