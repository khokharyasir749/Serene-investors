'use client'

import { Search } from 'lucide-react'
import { PhoneFrame } from '@/components/ui/mockups/PhoneFrame'
import { PortfolioPhoneScreen } from '@/components/ui/mockups/PortfolioPhoneScreen'
import { PropertyDetailPhoneScreen } from '@/components/ui/mockups/PropertyDetailPhoneScreen'

export function HeroVisual() {
  return (
    <div
      data-hero-visual
      className="relative order-2 mx-auto flex h-[490px] w-full max-w-[340px] items-center justify-center overflow-visible sm:h-[560px] sm:max-w-[420px] lg:h-[600px] lg:max-w-[460px] xl:max-w-[490px]"
    >
      {/* Ambient Radial Luxury Glow (Emerald & Warm Parchment) */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-amber-200/10 blur-3xl sm:-inset-12"
        aria-hidden="true"
      />

      {/* Phone 2 (Back-Left, Angled / Tilted Behind: -13deg) */}
      <div
        data-hero-card="receipt"
        className="absolute left-0 top-[3%] z-10 w-[220px] -rotate-[13deg] transition-all duration-700 ease-out hover:z-25 hover:rotate-[-9deg] sm:left-[2%] sm:top-[4%] sm:w-[265px] sm:-rotate-[14deg] lg:left-[4%] lg:w-[285px]"
      >
        <PhoneFrame time="9:41" className="shadow-[0_20px_50px_rgba(20,28,22,0.28)]">
          <PropertyDetailPhoneScreen />
        </PhoneFrame>
      </div>

      {/* Floating Micro Asset Badge (Layered between Phone 1 and Phone 2) */}
      <div
        data-hero-pill
        className="absolute left-[12%] top-[38%] z-30 flex -rotate-[6deg] items-center gap-2.5 rounded-2xl border border-ink/[0.08] bg-surface/95 p-1.5 pr-3 shadow-2xl shadow-ink/20 backdrop-blur-md transition-all duration-300 hover:rotate-0 hover:scale-105 sm:left-[18%] sm:top-[36%] sm:p-2 sm:pr-3.5 sm:-rotate-[8deg] lg:left-[20%]"
      >
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=120&h=120&q=80"
          alt="Boulevard Point, Mayfair"
          className="size-9 shrink-0 rounded-xl object-cover sm:size-11"
        />
        <div className="leading-tight">
          <p className="text-[10px] font-bold text-ink sm:text-xs">
            Boulevard Point, Mayfair
          </p>
          <p className="text-[8.5px] text-muted sm:text-[9.5px]">
            Prime Residential W1
          </p>
        </div>
        <div className="ml-1 rounded-full border border-emerald-300/60 bg-emerald-100/90 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-900 shadow-2xs sm:text-[10.5px]">
          +10.4%
        </div>
      </div>

      {/* Phone 1 (Front-Right, Primary: +3deg) */}
      <div
        data-hero-card="property"
        className="absolute right-0 top-0 z-20 w-[240px] rotate-[3deg] transition-all duration-700 ease-out hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_30px_70px_rgba(20,28,22,0.35)] sm:right-[3%] sm:w-[285px] lg:right-[5%] lg:w-[305px]"
      >
        <PhoneFrame time="9:41" className="shadow-[0_30px_65px_rgba(20,28,22,0.35)]">
          <PortfolioPhoneScreen />
        </PhoneFrame>
      </div>

      {/* Bottom Edge Phone 3 (Cutoff at bottom center) */}
      <div
        className="pointer-events-none absolute -bottom-[190px] left-[26%] z-15 w-[190px] -rotate-[3deg] opacity-80 transition-transform duration-700 sm:-bottom-[230px] sm:left-[30%] sm:w-[230px]"
        aria-hidden="true"
      >
        <PhoneFrame time="9:41" showHomeIndicator={false}>
          <div className="flex flex-col bg-bg-warm/50 p-2.5 pt-1">
            <div className="flex items-center gap-1.5 rounded-xl border border-ink/[0.08] bg-surface px-2.5 py-1.5 shadow-2xs">
              <Search size={11} className="text-muted" />
              <span className="text-[9.5px] text-muted">Search prime UK properties...</span>
            </div>
            <div className="mt-2.5 flex gap-2">
              <div className="h-12 w-16 rounded-lg bg-bg-warm" />
              <div className="h-12 flex-1 rounded-lg bg-bg-warm" />
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  )
}
